"use server"


import { User } from "./model";
import { connectToDB } from "./utli";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import Alert from "../components/alert";


const addUser = async (formData) => {
    console.log(formData, 'formData');
    const { username, userlast, email, password, cpassword,img } = await Object.fromEntries(formData)
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);
        await connectToDB();
        const newUser = await new User({
            username, userlast, email, password: hash, cpassword,img
        })
        await newUser.save();
        console.log(newUser, 'addUser');

    } catch (error) {
        console.log(error, 'addUser-error');
        // throw new Error("Failed to load")
    }

    redirect("/main-dashboard")
    revalidatePath("/main-dashboard")
   
    // <Alert alert={'Register Success'}/>

}

export default addUser;



export const deleteUser = async (formData) => {

    const { id } = await Object.fromEntries(formData)
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err, 'err delete');
        
    }

    redirect("/getuser")
    revalidatePath("/getuser")

}