"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OpeningSection() {
  // Initialize state for minutes and seconds
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  // Function to update the countdown
  const updateCountdown = () => {
    if (minutes === 0 && seconds === 0) {
      // Countdown has ended, you can add your desired action here
      clearInterval(countdownInterval);
    } else {
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }
  };

  // Use useEffect to start the countdown on page load
  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]); // Add minutes and seconds as dependencies

  return (
    <div className="bg-gray-900">
      {/* Navbar */}

      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-indigo-600 hover:ring-white">
              "This is rocket fuel for indie hackers"{" "}
              <Link href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                {/* Below is the arrow for suggesting a route */}
                {/* <span aria-hidden="true">&rarr;</span> */}
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Launch your SaaS in the next <span> </span>
            </h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-4">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl flex justify-center">
                  <span style={{ "--value": minutes }}></span>
                </span>
                minutes
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl flex justify-center">
                  <span style={{ "--value": seconds }}></span>
                </span>
                seconds
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The most succesful entrepreneurs on the internet launch and
              execute fast - and now you can too
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Launch your idea ➝
              </a>
              {/* Another button without BG */}
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
