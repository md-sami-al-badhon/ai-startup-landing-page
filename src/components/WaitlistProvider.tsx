'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface WaitlistContextType {
  isWaitlistOpen: boolean;
  setIsWaitlistOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isIncompleteModalOpen: boolean;
  setIsIncompleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const WaitListContextProvider = createContext<WaitlistContextType | null>(null);

const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isIncompleteModalOpen, setIsIncompleteModalOpen] = useState(false);

  useEffect(() => {
    if (isIncompleteModalOpen) {
      setTimeout(() => {
        setIsIncompleteModalOpen(false);
      }, 3000);
    }
  }, [isIncompleteModalOpen]);

  return (
    <WaitListContextProvider.Provider
      value={{
        isWaitlistOpen,
        setIsWaitlistOpen,
        isIncompleteModalOpen,
        setIsIncompleteModalOpen,
      }}>
      {children}
    </WaitListContextProvider.Provider>
  );
};

export { WaitlistProvider, WaitListContextProvider };
