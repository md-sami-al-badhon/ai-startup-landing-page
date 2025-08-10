'use client';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import { AnimationPlaybackControls, motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    text: '“This product has completely transformed how I manage my projects and deadlines”',
    name: 'Sophia Perez',
    title: 'Director @ Quantum',
    avatarImg: avatar1,
  },
  {
    text: '“These AI tools have completely revolutionized our SEO entire strategy overnight”',
    name: 'Jamie Lee',
    title: 'Founder @ Pulse',
    avatarImg: avatar2,
  },
  {
    text: '“The user interface is so intuitive and easy to use, it has saved us countless hours”',
    name: 'Alisa Hester',
    title: 'Product @ Innovate',
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: 'Alec Whitten',
    title: 'CTO @ Tech Solutions',
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      { translateX: 0 },
      { duration: 20, ease: 'linear', repeat: Infinity }
    );
  });
  useEffect(() => {
    if (animationRef.current) {
      if (isHovered) {
        animationRef.current.speed = 0;
      } else {
        animationRef.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-sm mx-auto   tracking-tight text-center mt-5">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        {/* cart */}
        <div className="flex overflow-hidden mt-10 mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            ref={scope}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            initial={{ translateX: '-50%' }}
            className="flex flex-none gap-5 pr-5">
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map(testimonial => (
                  <div
                    className="flex-none border border-white/15 p-6 md:p-10 md:max-w-md rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs"
                    key={testimonial.name}>
                    <div className="text-lg tracking-tight md:text-2xl">
                      {testimonial.text}{' '}
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                      <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                        <Image
                          src={testimonial.avatarImg}
                          alt={testimonial.name}
                          className="size-11 rounded-lg grayscale "
                        />
                      </div>
                      <div className="">
                        <div className="">{testimonial.name} </div>
                        <div className="text-white/50 text-sm">
                          {testimonial.title}{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
