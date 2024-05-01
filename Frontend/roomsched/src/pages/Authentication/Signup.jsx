import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import { Button } from '@/components/ui/button';
// import Signin1 from '../../assets/svgs/signin1.svg';
// import Signin2 from '../../assets/svgs/signin2.svg';
const Signup = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log();
  return (
    <div className="fixed top-0 z-40 flex h-screen w-full items-center justify-center bg-black/30 backdrop-blur">
      <div className="bg-card flex w-4/5 rounded-3xl p-4 shadow-lg lg:h-5/6 dark:bg-zinc-800">
        {/* Left side */}

        <>
          {' '}
          <div className="shadow-deep-inner relative flex h-full w-full flex-col  items-center rounded-2xl p-4 lg:w-full">
            {/* {error && <div className="error">{error}</div>} */}

            <form
              onSubmit={handleSubmit}
              className={`lg-mt-4 flex  w-full flex-col gap-3  
              `}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={'rounded-lg border-2 px-3 py-2 outline-none'}
                />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                {' '}
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={'rounded-lg border-2 px-3 py-2 outline-none'}
                />
              </div>
              <Button
                type="submit"
                // className="mt-3 rounded  py-2 font-semibold text-white transition duration-100 hover:brightness-110"
              >
                Continue
              </Button>
            </form>

            <div className="mt-20 flex w-full items-center justify-center ">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 flex-shrink text-sm text-gray-600">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              // onClick={googleSignIn}
              className="mt-4 flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 shadow-sm hover:bg-gray-50"
            >
              <FcGoogle className="mr-6" size={20} />
              <div className="text-lg">Continue with Google</div>
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Signup;
