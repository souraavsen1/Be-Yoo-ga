import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className='flex h-screen pt-28 -mt-16'>
      <form class='w-full max-w-lg mx-auto'>
        <div className='flex mb-6'>
          <div className='w-1/2 bg-red-300 py-2 text-center'>
            <Link className='hover:text-black' to={"/signup"}>
              Sign Up
            </Link>
          </div>
          <div className='w-1/2 py-2 text-center'>
            <Link className='hover:text-black' to={"/signin"}>
              Sign In
            </Link>
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-first-name'
            >
              First Name
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              placeholder='first name'
            />
          </div>
          <div class='w-full md:w-1/2 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Last Name
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              placeholder='last name'
            />
          </div>
        </div>

        <div className='-mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              E-mail
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='emial'
              required
              placeholder='example@example.com'
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Password
            </label>
            <p class='text-gray-600 text-xs italic'>
              Select password of at least 6 character.
            </p>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='password'
              required
              placeholder='password'
            />
          </div>
          <button
            className='px-8 py-2 text-white font-semibold mt-8 bg-red-400 rounded-full mx-auto hover:bg-red-300'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
