"use server"

import { redirect } from "next/navigation";

const { createUser, findUserByCredentials } = require("@/db/queries");

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const create = await createUser(user)

    redirect("/login")
}


async function performLogin(formData) {

    try {
        const credential = {};

        credential.email = formData.get('email');
        credential.password = formData.get('password');

        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error
    }

}


export {
    registerUser, performLogin
}