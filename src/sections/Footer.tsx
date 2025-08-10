'use client';
import { WaitListContextProvider } from '@/components/WaitlistProvider';
import Link from 'next/link';
import { useContext } from 'react';

export const Footer = () => {
  const context = useContext(WaitListContextProvider);
  if (!context) throw new Error('Something went wrong');
  const { setIsIncompleteModalOpen } = context;
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* logo */}
          <div className="flex gap-2 items-center lg:flex-1">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z"
                fill="currentColor"
              />
            </svg>
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          {/* links */}

          <nav className="flex flex-col gap-5 lg:flex-row lg:items-center  lg:gap-7 lg:flex-1 lg:justify-center">
            <Link
              href="#features"
              className="text-white/70 hover:text-white text-xs md:text-sm  transition">
              Features
            </Link>
            <p
              onClick={() => {
                setIsIncompleteModalOpen(true);
              }}
              className="text-white/70 hover:text-white text-xs md:text-sm  transition cursor-pointer">
              Developers
            </p>
            <p
              onClick={() => {
                setIsIncompleteModalOpen(true);
              }}
              className="text-white/70 hover:text-white text-xs md:text-sm  transition cursor-pointer">
              Company
            </p>
            <p
              onClick={() => {
                setIsIncompleteModalOpen(true);
              }}
              className="text-white/70 hover:text-white text-xs md:text-sm  transition cursor-pointer">
              Blog
            </p>
            <p
              onClick={() => {
                setIsIncompleteModalOpen(true);
              }}
              className="text-white/70 hover:text-white text-xs md:text-sm  transition cursor-pointer">
              Changelog
            </p>
          </nav>

          {/*socials  */}
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Link target="_blank" href="https://x.com/sami_dotdev">
              <svg
                className="text-white/40 hover:text-white transition cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.1564 21.1109C20.0918 21.2286 19.9968 21.3267 19.8814 21.3951C19.766 21.4636 19.6343 21.4998 19.5001 21.5H15.0001C14.8739 21.5 14.7497 21.4681 14.6391 21.4073C14.5285 21.3465 14.435 21.2587 14.3673 21.1522L10.5714 15.1869L5.05512 21.2544C4.92065 21.3988 4.73466 21.4845 4.53748 21.4927C4.34029 21.5009 4.14781 21.4311 4.00176 21.2984C3.8557 21.1657 3.76785 20.9807 3.75725 20.7836C3.74665 20.5866 3.81415 20.3933 3.94512 20.2456L9.73606 13.8706L3.86731 4.65313C3.79503 4.53973 3.75457 4.40898 3.75016 4.27458C3.74575 4.14018 3.77756 4.00707 3.84226 3.88918C3.90695 3.77129 4.00215 3.67296 4.11789 3.60449C4.23363 3.53603 4.36565 3.49993 4.50012 3.5H9.00012C9.12635 3.50004 9.25052 3.53194 9.36114 3.59274C9.47176 3.65353 9.56524 3.74127 9.63293 3.84781L13.4289 9.81312L18.9451 3.74562C19.0796 3.60117 19.2656 3.51555 19.4628 3.50731C19.6599 3.49907 19.8524 3.56888 19.9985 3.70161C20.1445 3.83435 20.2324 4.01929 20.243 4.21636C20.2536 4.41343 20.1861 4.60674 20.0551 4.75438L14.2642 11.1247L20.1329 20.3478C20.2048 20.4613 20.2449 20.5919 20.249 20.7262C20.2531 20.8604 20.2211 20.9933 20.1564 21.1109Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/samidotdev">
              <svg
                className="text-white/40 hover:text-white transition cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 2.75H7.5C6.10807 2.75149 4.77358 3.30509 3.78933 4.28933C2.80509 5.27358 2.25149 6.60807 2.25 8V17C2.25149 18.3919 2.80509 19.7264 3.78933 20.7107C4.77358 21.6949 6.10807 22.2485 7.5 22.25H16.5C17.8919 22.2485 19.2264 21.6949 20.2107 20.7107C21.1949 19.7264 21.7485 18.3919 21.75 17V8C21.7485 6.60807 21.1949 5.27358 20.2107 4.28933C19.2264 3.30509 17.8919 2.75149 16.5 2.75ZM12 17C11.11 17 10.24 16.7361 9.49993 16.2416C8.75991 15.7471 8.18314 15.0443 7.84254 14.2221C7.50195 13.3998 7.41283 12.495 7.58647 11.6221C7.7601 10.7492 8.18868 9.94736 8.81802 9.31802C9.44736 8.68868 10.2492 8.2601 11.1221 8.08647C11.995 7.91283 12.8998 8.00195 13.7221 8.34254C14.5443 8.68314 15.2471 9.25991 15.7416 9.99993C16.2361 10.74 16.5 11.61 16.5 12.5C16.4988 13.6931 16.0243 14.837 15.1806 15.6806C14.337 16.5243 13.1931 16.9988 12 17ZM17.625 8C17.4025 8 17.185 7.93402 17 7.8104C16.815 7.68679 16.6708 7.51109 16.5856 7.30552C16.5005 7.09995 16.4782 6.87375 16.5216 6.65552C16.565 6.43729 16.6722 6.23684 16.8295 6.0795C16.9868 5.92217 17.1873 5.81502 17.4055 5.77162C17.6238 5.72821 17.85 5.75049 18.0555 5.83564C18.2611 5.92078 18.4368 6.06498 18.5604 6.24998C18.684 6.43499 18.75 6.6525 18.75 6.875C18.75 7.17337 18.6315 7.45952 18.4205 7.6705C18.2095 7.88147 17.9234 8 17.625 8ZM15 12.5C15 13.0933 14.8241 13.6734 14.4944 14.1667C14.1648 14.6601 13.6962 15.0446 13.1481 15.2716C12.5999 15.4987 11.9967 15.5581 11.4147 15.4424C10.8328 15.3266 10.2982 15.0409 9.87868 14.6213C9.45912 14.2018 9.1734 13.6672 9.05764 13.0853C8.94189 12.5033 9.0013 11.9001 9.22836 11.3519C9.45542 10.8038 9.83994 10.3352 10.3333 10.0056C10.8266 9.67595 11.4067 9.5 12 9.5C12.7956 9.5 13.5587 9.81607 14.1213 10.3787C14.6839 10.9413 15 11.7044 15 12.5Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@samidotdev">
              <svg
                className="text-white/40 hover:text-white transition cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.9684 7.0175C21.8801 6.67189 21.7109 6.35224 21.4747 6.08491C21.2385 5.81758 20.9421 5.61024 20.61 5.48C17.3962 4.23875 12.2812 4.25 12 4.25C11.7188 4.25 6.60375 4.23875 3.39 5.48C3.0579 5.61024 2.76153 5.81758 2.52534 6.08491C2.28915 6.35224 2.1199 6.67189 2.03156 7.0175C1.78875 7.95313 1.5 9.66313 1.5 12.5C1.5 15.3369 1.78875 17.0469 2.03156 17.9825C2.11977 18.3283 2.28895 18.6481 2.52515 18.9156C2.76136 19.1831 3.0578 19.3906 3.39 19.5209C6.46875 20.7088 11.2875 20.75 11.9381 20.75H12.0619C12.7125 20.75 17.5341 20.7088 20.61 19.5209C20.9422 19.3906 21.2386 19.1831 21.4748 18.9156C21.711 18.6481 21.8802 18.3283 21.9684 17.9825C22.2113 17.045 22.5 15.3369 22.5 12.5C22.5 9.66313 22.2113 7.95313 21.9684 7.0175ZM15.0553 13.1113L11.3053 15.7363C11.1931 15.8148 11.0616 15.8612 10.9249 15.8703C10.7883 15.8794 10.6517 15.851 10.5301 15.788C10.4085 15.725 10.3064 15.6299 10.235 15.513C10.1636 15.3962 10.1256 15.262 10.125 15.125V9.875C10.125 9.7378 10.1627 9.60324 10.2339 9.48597C10.3051 9.36869 10.4071 9.27319 10.5289 9.20987C10.6506 9.14655 10.7873 9.11783 10.9242 9.12683C11.0611 9.13584 11.1929 9.18222 11.3053 9.26094L15.0553 11.8859C15.154 11.9551 15.2345 12.047 15.2901 12.1539C15.3457 12.2608 15.3747 12.3795 15.3747 12.5C15.3747 12.6205 15.3457 12.7392 15.2901 12.8461C15.2345 12.953 15.154 13.0449 15.0553 13.1141V13.1113Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
