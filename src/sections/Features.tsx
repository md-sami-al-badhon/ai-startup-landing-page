'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from 'motion/react';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

const tabs = [
  {
    icon: '/assets/lottie/speedometer.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/mouse-click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

type Tab = {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
};

const FeatureTab = ({
  tab,
  index,
  handleSelectedTab,
  selected,
}: {
  tab: Tab & ComponentPropsWithoutRef<'div'>;
  index: number;
  handleSelectedTab: (tab: number) => void;
  selected: boolean;
}) => {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const MaskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;
  const TabRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!TabRef.current) return;
    const { height, width } = TabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
      times,
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        handleSelectedTab(index);
      }}
      ref={TabRef}
      className="relative border border-white/15  flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 select-none cursor-pointer hover:bg-white/10 transition-colors">
      {selected && (
        <motion.div
          style={{ maskImage: MaskImage }}
          className="absolute inset-0 border border-[#a369ff] rounded-xl -m-px "></motion.div>
      )}
      <div className="size-12 border border-white/15 rounded-lg inline-fle items-center justify-center">
        <DotLottieReact loop src={tab.icon} className="size-10" autoplay />
      </div>
      <div className="font-medium">{tab.title} </div>
      {tab.isNew && (
        <div className="text-xs px-2 py-0.5 rounded-full bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </motion.div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (tab: number) => {
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    };
    setSelectedTab(tab);
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[tab].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[tab].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[tab].backgroundPositionY],
      animateOptions
    );
  };
  const backgroundPositionX = useMotionValue(
    tabs[selectedTab].backgroundPositionX
  );
  const backgroundPositionY = useMotionValue(
    tabs[selectedTab].backgroundPositionY
  );
  const backgroundSizeX = useMotionValue(tabs[selectedTab].backgroundSizeX);
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="container ">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto   tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, index) => (
            <FeatureTab
              handleSelectedTab={handleSelectedTab}
              selected={selectedTab === index ? true : false}
              tab={tab}
              key={index}
              index={index}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
              backgroundImage: `url(${productImage.src})`,
            }}></motion.div>
        </div>
      </div>
    </section>
  );
};
