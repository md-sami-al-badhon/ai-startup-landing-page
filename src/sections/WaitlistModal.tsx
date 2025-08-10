'use client';
import { WaitListContextProvider } from '@/components/WaitlistProvider';
import { AnimatePresence, motion } from 'motion/react';
import React, {
  ChangeEvent,
  InputEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';

const WaitlistModal = () => {
  const [inputValue, setInputValue] = useState({ text: '', email: '' });

  const [error, setError] = useState({ text: '', email: '' });
  const [initialRenderingName, setInitialRenderingName] = useState(false);
  const [initialRenderingEmail, setInitialRenderingEmail] = useState(false);
  const [isFormValidated, setIsFormValidated] = useState({
    text: false,
    email: false,
  });

  const context = useContext(WaitListContextProvider);
  if (!context)
    throw new Error('SomeComponent must be used within a WaitlistProvider');
  const { isWaitlistOpen, setIsWaitlistOpen } = context;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') {
      setInitialRenderingEmail(true);
    } else {
      setInitialRenderingName(true);
    }
    setInputValue(prev => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    const regex = /^[a-zA-z][a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    if (initialRenderingEmail) {
      if (inputValue.email.length < 1) {
        setError(prev => {
          return { ...prev, email: 'Email required' };
        });
      } else if (!inputValue.email.match(regex)) {
        setError(prev => {
          return { ...prev, email: 'Enter a valid email address' };
        });
      } else {
        setIsFormValidated(prev => {
          return { ...prev, email: true };
        });
        setError(prev => {
          return { ...prev, email: '' };
        });
      }
    }
  }, [inputValue.email, initialRenderingEmail]);

  useEffect(() => {
    if (initialRenderingName) {
      if (inputValue.text.length < 1) {
        setError(prev => {
          return { ...prev, text: 'Name required' };
        });
      } else if (inputValue.text.length < 3) {
        setError(prev => {
          return { ...prev, text: 'Name is too short' };
        });
      } else if (inputValue.text.length > 16) {
        setError(prev => {
          return { ...prev, text: 'Name is too long' };
        });
      } else {
        setIsFormValidated(prev => {
          return { ...prev, text: true };
        });
        setError(prev => {
          return { ...prev, text: '' };
        });
      }
    }
  }, [inputValue.text, initialRenderingName]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInitialRenderingName(true);
    setInitialRenderingEmail(true);
    if (
      isFormValidated.email &&
      isFormValidated.text &&
      !error.text &&
      !error.email
    ) {
      console.log('submitted');
      setInputValue(() => {
        return { text: '', email: '' };
      });
      setInitialRenderingName(false);
      setInitialRenderingEmail(false);
      setIsFormValidated({
        text: false,
        email: false,
      });
      setIsWaitlistOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center fixed z-[1000] top-0 left-0 right-0 bottom-0 backdrop-blur-[1.8px] ">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: [0.6, 1.1, 1] }}
            style={{ boxShadow: 'inset 0 0 10px 2px black' }}
            className="relative border border-white/15 p-6 md:p-10 md:max-w-md rounded-xl bg-[linear-gradient(to_bottom_left,black,rgb(84,39,157),black)]   max-w-xs">
            <button
              onClick={() => {
                setIsWaitlistOpen(false);
              }}
              className="absolute top-3 right-3 border-2 border-white/40 p-1 rounded-lg opacity-70 cursor-pointer group hover:bg-white hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="size-6 group-hover:fill-red-500 transition "
                fill="#ffffffb8">
                <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
              </svg>
            </button>
            <div className="flex flex-col gap-2 items-center">
              <div className="border-2 border-white/20 p-1 rounded-lg flex justify-center items-center">
                <svg
                  className="size-10"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-center">
                Join waitlist
              </h2>
              <p className="text-white/70 tracking-tight text-md text-center">
                Enter your name and email, and we&apos;ll notify you when we
                launch.
              </p>
            </div>
            <form
              noValidate
              onSubmit={handleFormSubmit}
              className="mt-8  flex flex-col   gap-3">
              {/* name input */}
              <div className="">
                <div className="flex  gap-2 items-center">
                  <label htmlFor="" className="">
                    Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    value={inputValue.text}
                    onChange={handleOnChange}
                    id=""
                    placeholder="Sami"
                    className={`border-2 flex-1   p-1 rounded-md focus:outline-1 focus:outline-offset-2 outline-white ${
                      error.text ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                </div>
                {error.text && (
                  <p className="ml-14 text-red-400 text-sm tracking-wide">
                    {error.text}
                  </p>
                )}
              </div>
              {/* email input */}
              <div className="">
                <div className="flex gap-2 items-center">
                  <label htmlFor="" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleOnChange}
                    id=""
                    placeholder="sami@example.com"
                    className={`border-2 flex-1  p-1 rounded-md focus:outline-1 focus:outline-offset-2 outline-white ${
                      error.email ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                </div>
                {error.email && (
                  <p className="ml-14 text-red-400 text-sm tracking-wide">
                    {error.email}
                  </p>
                )}
              </div>

              <button
                className="bg-[rgb(84,39,157)] hover:bg-[rgb(103,41,204)] border border-white/20 shadow-sm shadow-gray-900 w-full cursor-pointer p-1 rounded-md"
                type="submit">
                Join
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
