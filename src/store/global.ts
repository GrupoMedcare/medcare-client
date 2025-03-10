"use client";
import { useEffect, useState } from "react";
import { create } from "zustand";

interface GlobalStore {
  isMobile: boolean;
  setIsMobile: (v: boolean) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  isMobile: false,
  setIsMobile: (v) => set({ isMobile: v }),
}));

export const GlobalStore = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setIsMobile } = useGlobalStore();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    function resizeScreen() {
      if (innerWidth >= 1024) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
    if (isMounted) {
      if (innerWidth >= 1024) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
      window.addEventListener("resize", resizeScreen);
    }
    return () => window.removeEventListener("resize", resizeScreen);
  }, [isMounted, setIsMobile]);
  return null;
};

export default useGlobalStore;
