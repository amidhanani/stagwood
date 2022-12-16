import React, { useState } from "react";
//import React from 'react'
import login from "../images/login.jpg";
export default function Login() {
  const [formData, setFormData] = useState({ 
    user: {
      username: "", 
      password: "" 
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
        <div>
        <img src={login} alt="Image"/>
        </div>
    <figure className="h-screen flex bg-gray-100">
      <div className="max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome </p>
        </blockquote>
        
        <div className="text-primary m-6">
      <div className="flex items-center mt-3 justify-center">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
          Login to your account
        </h1>
      </div>
      <form>
        <input
          name="username"
          type="text"
          value={formData.user.username}
          onChange={handleChange}
          placeholder="Username"
          className={
            "w-full p-2 text-center text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />
        <input
          name="email"
          type="email"
          value={formData.user.username}
          onChange={handleChange}
          placeholder="Email"
          className={
            "w-full p-2 text-center text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />
        <input
          name="password"
          type="password"
          value={formData.user.password}
          onChange={handleChange}
          placeholder="Password"
          className={
            "w-full p-2 text-center text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />
         <input
          name="cpassword"
          type="password"
          value={formData.user.password}
          onChange={handleChange}
          placeholder="Confirm Password"
          className={
            "w-full p-2 text-center text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />
        <div className="flex items-center mt-3 justify-center">
          <button
            className={
              "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
            }
            value="Login"
          >
            Register
          </button>
        </div>
      </form>
      <div className="flex items-center mt-3 justify-center">
      <button className={"justify-center text-blue-500 hover:underline"}>
        Already have a account?? Login
      </button>
      </div>
    </div>
      </div>
    </figure>
    </div>

  );
}