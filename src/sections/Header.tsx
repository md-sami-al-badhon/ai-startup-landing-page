'use client';
import Button from '@/components/Button';
import { WaitListContextProvider } from '@/components/WaitlistProvider';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useContext } from 'react';

export const Header = () => {
  const context = useContext(WaitListContextProvider);
  if (!context) throw new Error('Something went wrong');
  const { isIncompleteModalOpen, setIsIncompleteModalOpen } = context;
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50 backdrop-blur md:backdrop-blur-none overflow-hidden ">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur ">
          {/* logo */}
          <div>
            <div className="border border-white/15 inline-flex size-10 items-center justify-center rounded-lg">
              <Link href="#top">
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* nav */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm ">
              <Link
                href="#features"
                className="text-white/70 hover:text-white transition">
                Features
              </Link>
              <p
                onClick={() => {
                  setIsIncompleteModalOpen(true);
                }}
                className="text-white/70 hover:text-white transition cursor-pointer">
                Developers
              </p>
              <p
                onClick={() => {
                  setIsIncompleteModalOpen(true);
                }}
                className="text-white/70 hover:text-white transition cursor-pointer">
                Pricing
              </p>
              <p
                onClick={() => {
                  setIsIncompleteModalOpen(true);
                }}
                className="text-white/70 hover:text-white transition cursor-pointer">
                Changelog
              </p>
            </nav>
          </div>

          {/* button and hamburger */}
          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <svg
              onClick={() => {
                setIsIncompleteModalOpen(true);
              }}
              className="md:hidden"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.5 16C28.5 16.2652 28.3946 16.5196 28.2071 16.7071C28.0196 16.8946 27.7652 17 27.5 17H5.5C5.23478 17 4.98043 16.8946 4.79289 16.7071C4.60536 16.5196 4.5 16.2652 4.5 16C4.5 15.7348 4.60536 15.4804 4.79289 15.2929C4.98043 15.1054 5.23478 15 5.5 15H27.5C27.7652 15 28.0196 15.1054 28.2071 15.2929C28.3946 15.4804 28.5 15.7348 28.5 16ZM5.5 9H27.5C27.7652 9 28.0196 8.89464 28.2071 8.70711C28.3946 8.51957 28.5 8.26522 28.5 8C28.5 7.73478 28.3946 7.48043 28.2071 7.29289C28.0196 7.10536 27.7652 7 27.5 7H5.5C5.23478 7 4.98043 7.10536 4.79289 7.29289C4.60536 7.48043 4.5 7.73478 4.5 8C4.5 8.26522 4.60536 8.51957 4.79289 8.70711C4.98043 8.89464 5.23478 9 5.5 9ZM27.5 23H5.5C5.23478 23 4.98043 23.1054 4.79289 23.2929C4.60536 23.4804 4.5 23.7348 4.5 24C4.5 24.2652 4.60536 24.5196 4.79289 24.7071C4.98043 24.8946 5.23478 25 5.5 25H27.5C27.7652 25 28.0196 24.8946 28.2071 24.7071C28.3946 24.5196 28.5 24.2652 28.5 24C28.5 23.7348 28.3946 23.4804 28.2071 23.2929C28.0196 23.1054 27.7652 23 27.5 23Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isIncompleteModalOpen && (
          <motion.div
            initial={{ translateX: '-200px', opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: '200px', opacity: 0 }}
            className="absolute inset-0 z-50   flex justify-center items-center ">
            <p className="p-2 bg-red-600 rounded-sm">
              This section is incomplete.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
