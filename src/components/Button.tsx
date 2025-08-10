'use client';
import { motion } from 'motion/react';
import React, { useContext } from 'react';
import { WaitListContextProvider } from '@/components/WaitlistProvider';
const Button = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(WaitListContextProvider);
  if (!context)
    throw new Error('SomeComponent must be used within a WaitlistProvider');
  const { isWaitlistOpen, setIsWaitlistOpen } = context;
  return (
    <>
      <motion.button
        onClick={() => {
          setIsWaitlistOpen(true);
        }}
        whileTap={{ scale: 0.9 }}
        className="relative py-2 px-3 cursor-pointer rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff]">
        <div className="absolute inset-0">
          <div className="rounded-lg absolute inset-0 border border-white/20 mask-[linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg absolute inset-0 border border-white/40 mask-[linear-gradient(to_top,black,transparent)]"></div>
          <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
        </div>{' '}
        <span>{children} </span>
      </motion.button>
    </>
  );
};

export default Button;
