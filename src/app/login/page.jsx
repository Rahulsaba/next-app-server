"use client"
import Head from '../components/head';
import { Metadata } from 'next';
import { Allan } from "next/font/google";
import { serverLogin } from "../api/config";
import { useState } from "react";

import RootLayout from "../layout";



export default function Login() {

  
  const [success, setSuccess] = useState(false);

 


  async function onSubmit() {
    // zod for server side validiation
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const returnData = await serverLogin(formData);
    // setSuccess(true)
    // console.log(returnData, 'returnData');

    // if (returnData?.error) {
    //   alert(returnData?.error);
    // }

  }

  return (
    <>
          <Head tittle={'Login'}/>

      <form onSubmit={''} className="flex items-center justify-center">
        <input
          type="email"
          name="email"
          placeholder="email"
          className="text-black"
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-black"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}