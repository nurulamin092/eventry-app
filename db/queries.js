

import { userModel } from "@/models/user-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import mongoose from "mongoose";

const { eventModel } = require("@/models/event-models");

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event)
}

async function createUser(user) {
    return await userModel.create(user)
}

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();

    if (user) {
        return replaceMongoIdInObject(user)
    }
    return null;
}

async function updateInterest(eventId, authId) {
    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUser = event.interested_ids.find(id => id.toString() === authId);

        if (foundUser) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }

        event.save()
    }

}


async function updateGoing(eventId, authId) {
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save()
}



export {
    getAllEvents, getEventById, createUser, findUserByCredentials, updateInterest, updateGoing
}