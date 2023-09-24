// import React, { useState, useEffect } from "react";

// // Show some numeric stats to your users

// const NumberStats = () => {
//   return (
//     <div class="bg-gray-900 py-24 sm:py-32">
//       <div class="mx-auto max-w-7xl px-6 lg:px-8">
//         <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//           <div class="mx-auto flex max-w-xs flex-col gap-y-4">
//             <dt class="text-base leading-7 text-gray-300">
//               to Launch and start validating
//             </dt>
//             <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
//               30 Minutes
//             </dd>
//           </div>
//           <div class="mx-auto flex max-w-xs flex-col gap-y-4">
//             <dt class="text-base leading-7 text-gray-300">
//               Estimated time of launch
//             </dt>
//             <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
//               10: 14AM
//             </dd>
//           </div>
//           <div class="mx-auto flex max-w-xs flex-col gap-y-4">
//             <dt class="text-base leading-7 text-gray-300">
//               built and launched already
//             </dt>
//             <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
//               5 MVPs
//             </dd>
//           </div>
//         </dl>
//       </div>
//     </div>
//   );
// };

// export default NumberStats;
"use client";

import React, { useState, useEffect } from "react";

const NumberStats = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  // Add 30 minutes to the current time
  const estimatedLaunchTime = addMinutes(currentTime, 30);

  // Format the estimated time as "hh:mm A"
  const formattedTime = estimatedLaunchTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-300">
              to Launch and start validating
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              30 Minutes
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-300">
              Estimated time of launch
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {formattedTime}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-300">
              Components to turn ideas into reality
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              15 +
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default NumberStats;
