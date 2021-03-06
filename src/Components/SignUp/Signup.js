import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const {
    googleSignin,
    setEmail,
    setPassword,
    SingUpWithEmail,
    error,
    setFirstName,
    setLastName,
    setError,
  } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("")
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("")
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };


  return (
    <div className='flex flex-col h-screen pt-16 mb-36'>
      <form
        class='w-full max-w-lg mx-auto'
        onSubmit={(e) => {
          SingUpWithEmail(e);
        }}
      >
        <div className='flex w-11/12 lg:w-full mx-auto mb-6'>
          <Link className='w-full bg-red-300 hover:text-black' to={"/signup"}>
            <div className='py-2 text-center'>Sign Up</div>
          </Link>
          <Link className='w-full hover:text-black' to={"/signin"}>
            <div className=' py-2 text-center'>Sign In</div>
          </Link>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
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
              onChange={handleFirstName}
            />
          </div>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3'>
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
              onChange={handleLastName}
            />
          </div>
        </div>
        <div className='-mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto px-3'>
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
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Password
            </label>

            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='password'
              required
              placeholder='password'
              onChange={handlePasswordChange}
            />
            <p class='text-xs italic text-red-500 text-center'>{error}</p>
          </div>
          <button
            className='px-8 py-2 text-white font-semibold mt-6 bg-red-400 rounded-full mx-auto hover:bg-red-300'
            type='submit'
          >
            Create Account
          </button>
        </div>
      </form>
      <p className='text-center'>
        Already have an account?{" "}
        <span className='text-red-500 hover:text-red-500'>
          <Link to={"/signin"}>Sign in</Link>
        </span>
      </p>
      <div className='flex items-center w-full max-w-lg mx-auto py-10'>
        {/* For Signup with google */}
        <button
          className='w-1/3 py-2 text-white font-semibold bg-red-400 rounded-full mx-auto hover:bg-red-300'
          onClick={googleSignin}
        >
          <i class='fab fa-google'></i> Google
        </button>
        {/* For Signup with facebook  */}
        <button className=' w-1/3 py-2 text-white font-semibold bg-red-400 rounded-full mx-auto hover:bg-red-300'>
          <i class='fab fa-facebook-f'></i> Facebook
        </button>
      </div>
    </div>
  );
};

export default Signup;
