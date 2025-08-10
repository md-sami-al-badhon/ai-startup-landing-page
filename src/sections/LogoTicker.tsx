'use client';
import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestial from '@/assets/logo-celestial.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import quantumLogo from '@/assets/logo-quantum.png';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const logos = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
  { src: celestial, alt: 'Celestial Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
];

export const LogoTicker = () => {
  return (
    <section>
      <div className="container py-20 md:py-24">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: '-50%' }}
              animate={{ translateX: 0 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex flex-none gap-14 pr-14 ">
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {logos.map((logo, index) => (
                    <Image
                      className="h-6 w-auto flex-none"
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
