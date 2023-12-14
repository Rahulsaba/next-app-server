import GetUser from "../getuser/page";
import { User } from "../lib/model";
import { connectToDB } from "../lib/utli";

const api = process.env.Main_Api;




export const serverLogin = async (formData) => {
    try {
        const response = await fetch(`${api}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:{
                email: formData.get('email'),
                password: formData.get('password'),
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return data = await response.json();
    } catch (error) {
        return {error : " Something went wrong"}
    }
}



export const fetchData = async () => {
   const db = await  connectToDB()
  
    const u = await User.find().sort({_id: -1})
    console.log(u, 'u');
    return u
}

 


    // const data = await fetch(`${api}products`,
    //     {
    //         // no-store every time fetch data in Api 
    //         cache: 'no-store'
    //     });

    // if (!data.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }
    // return data.json();