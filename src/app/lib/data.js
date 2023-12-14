'use server'

import { User } from "./model";
import { connectToDB } from "./utli";
import { NextResponse } from 'next/server'

export const fetchUsers = async () => {
    connectToDB();
    const users = User.find()
    console.log(users, 'user')
}

