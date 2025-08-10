'use client';
import Button from '@/components/Button';
import starsBg from '@/assets/stars.png';
import gridLine from '@/assets/grid-lines.png';
import { RefObject, useEffect, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';

const useRelativeMousePosition = (to: RefObject<HTMLDivElement | null>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current.getBoundingClientRect();

      mouseX.set(event.x - left);
      mouseY.set(event.y - top);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;

  return (
    <motion.section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group">
          {/* grid lines */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay mask-[radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLine.src})` }}></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] opacity-0 group-hover:opacity-100 bg-blend-overlay  transition duration-700"
            style={{
              backgroundImage: `url(${gridLine.src})`,
              maskImage,
            }}></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium text-center max-w-sm mx-auto  tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-xs mx-auto px-4   tracking-tight text-center mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
