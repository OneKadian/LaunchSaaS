import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

// 3 price tiers, will try to add monthly annual toggle and buy on Stripe / Gumroad button

const PricingTable = () => {
  return (
    <section class="bg-gray-900">
      <div class="px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div
          class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"
          id="pricing-section"
        >
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
            {/* Curated for Geniuses*/}
            Pricing
          </h2>
          <p class="mb-5 font-light text-gray-300 sm:text-xl">
            Buy once, Launch forever
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card 1 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow text-white">
            <h3 class="mb-4 text-2xl font-semibold">Current</h3>
            <p class="font-light text-gray-300 sm:text-lg">
              {/* Assuming you work for $25/hr. Higher than that? More money lost */}
              Your current situation where the idea is nowhere near Launch
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold"> 30+ hrs </span>
              {/* For adding per month */}
              <span class="text-gray-500"></span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span> Creating everything from scratch</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Work flow: <span class="font-semibold">Unorganized</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Resources: <span class="font-semibold">Limited</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Launch: <span class="font-semibold">Delayed</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Outcome: <span class="font-semibold">Burnout</span>
                </span>
              </li>
            </ul>
            {/* <button
              disabled="true"
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Before One Kadian
            </button> */}
          </div>

          {/* <!-- Pricing Card 2 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow xl:p-8 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Innovator</h3>
            <p class="font-light text-gray-300 sm:text-lg">
              Take off with us and build your SaaS venture at warp speed
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$70</span>
              {/* For adding per month */}
              <span class="text-gray-500"></span>
              {/* <span class="text-gray-500>
                month
              </span> */}
            </div>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>Boiler Plate with instructions</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span> Organized flow with roadmaps</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="">Resource sheet included</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  Launch:
                  <span class="font-semibold"> Instant</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Updates: <span class="font-semibold">Unavailable</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              LAUNCH
            </a>
          </div>

          {/* <!-- Pricing Card 3 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow xl:p-8 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Pioneer</h3>
            <p class="font-light text-gray-300 sm:text-lg">
              If you're in it for the long haul, this plan is tailor-made for
              you.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$100</span>
              {/* For adding per month */}
              <span class="text-gray-500"></span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>Boiler Plate with instructions</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span> Organized flow with roadmaps</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="">Resource sheet included</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  Launch:
                  <span class="font-semibold"> Instant</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-300" />
                <span>
                  Updates: <span class="font-semibold">Available</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              LAUNCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
