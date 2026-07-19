"use client";

import { useEffect, useState } from "react";

const STEPS = [
  "Turning the page...",
  "Reading between the lines...",
  "Searching centuries of stories...",
  "Finding your character...",
  "Writing your chapter...",
];

interface PageTurnLoaderProps {
  message?: string;
}

export default function PageTurnLoader({
  message = "Turning the page...",
}: PageTurnLoaderProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 2200);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 92) return p;
        const jump = Math.random() * 8 + 2;
        return Math.min(p + jump, 92);
      });
    }, 400);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const displayMessage = message === "Turning the page..." ? STEPS[step] : message;

  return (
    <div className="flex flex-col items-center justify-center min-h-[55vh] px-4 py-12">
      {/* Open book with flipping page */}
      <div className="loader-book-scene">
        {/* Back cover / shadow */}
        <div className="loader-book-base" />

        {/* Left page (static) */}
        <div className="loader-page loader-page-left">
          <div className="loader-line w-[70%]" style={{ animationDelay: "0s" }} />
          <div className="loader-line w-full" style={{ animationDelay: "0.1s" }} />
          <div className="loader-line w-[85%]" style={{ animationDelay: "0.2s" }} />
          <div className="loader-line w-[60%] mt-4" style={{ animationDelay: "0.3s" }} />
          <div className="loader-line w-full" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Right page (flipping) */}
        <div className="loader-page loader-page-right loader-page-flip">
          <div className="loader-line w-full" style={{ animationDelay: "0.15s" }} />
          <div className="loader-line w-[90%]" style={{ animationDelay: "0.25s" }} />
          <div className="loader-line w-[75%]" style={{ animationDelay: "0.35s" }} />
          <div className="loader-line w-full mt-4" style={{ animationDelay: "0.45s" }} />
          <div className="loader-line w-[50%]" style={{ animationDelay: "0.55s" }} />
        </div>

        {/* Spine */}
        <div className="loader-spine" />
      </div>

      {/* Status text */}
      <p className="font-serif text-base sm:text-lg text-[#1a1510] mt-10 text-center min-h-[1.75rem] transition-opacity duration-300">
        {displayMessage}
      </p>
      <p className="font-script text-[#9a948c] text-base mt-1 flex items-center gap-1">
        Finding your chapter
        <span className="loader-dots inline-flex">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>

      {/* Progress bar */}
      <div className="w-48 sm:w-56 mt-6">
        <div className="h-1 bg-[#e0d9ce] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1a1510] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-[#9a948c] text-center mt-2 tracking-wider">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
