import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

const { eventModel } = require("@/models/event-models");

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event)
}
export {
    getAllEvents, getEventById
}