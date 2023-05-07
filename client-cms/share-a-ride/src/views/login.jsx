import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-no-background.png";

export default function LoginForm() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-900">
      <div className="mx-auto max-w-lg">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Share-a-Ride Logo" className="h-16" />
        </div>

        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
      
        </h1>

        <form
          action=""
          className="bg-white mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg text-gray-800 font-medium">
            Share-a-Ride Admin Login
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border-blue-700 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
