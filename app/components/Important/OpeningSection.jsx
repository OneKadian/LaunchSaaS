"use client";

// Hero section, define your product with what it can do and offer a CTA button

import { useState, useEffect } from "react";
import Link from "next/link";
import SingleTestimonial from "../Extras/SingleTestimonial";

export default function OpeningSection() {
  // Initialize state for minutes and seconds
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  const openingCopy = {
    announcementText: "Literally everything you need to get started",
    titleText: "Launch your SaaS in the next 30 Minutes",
    subtitleText:
      "Code Boilerplate, resource sheet and templates to turn developers into founders and help them launch instantly",
  };

  // Function to update the countdown
  // const updateCountdown = () => {
  //   if (minutes === 0 && seconds === 0) {
  //     // Countdown has ended, you can add your desired action here
  //     clearInterval(countdownInterval);
  //   } else {
  //     if (seconds === 0) {
  //       setMinutes(minutes - 1);
  //       setSeconds(59);
  //     } else {
  //       setSeconds(seconds - 1);
  //     }
  //   }
  // };

  // Use useEffect to start the countdown on page load
  // useEffect(() => {
  //   const countdownInterval = setInterval(updateCountdown, 1000);

  //   // Cleanup the interval when the component unmounts
  //   return () => clearInterval(countdownInterval);
  // }, [minutes, seconds]); // Add minutes and seconds as dependencies

  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:pb-24 pt-36 lg:pt-40">
          <SingleTestimonial />
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {openingCopy.titleText} <span> </span>
            </h1>
            {/* <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-4">
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
            </div> */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {openingCopy.subtitleText}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Launch your idea ➝
              </Link>
            </div>
            {/* <SingleTestimonial /> */}
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
