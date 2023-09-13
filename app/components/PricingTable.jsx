import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const PricingTable = () => {
  return (
    <section class="bg-gray-900">
      <div class="px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-300 dark:text-white">
            {/* Curated for Geniuses*/}
            Don't reinvent the wheel
          </h2>
          <p class="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">
            {/* Don't reinvent the wheel */}
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card 1 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Current</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              {/* Assuming you work for $25/hr. Higher than that? More money lost */}
              Your current situation where the idea is nowhere near Launch
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold"> 30+ hrs </span>
              {/* For adding per month */}
              <span class="text-gray-500 dark:text-gray-400"></span>
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
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Before One Kadian
            </button> */}
          </div>

          {/* <!-- Pricing Card 2 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Innovator</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              Take off with us and build your SaaS venture at warp speed
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$70</span>
              {/* For adding per month */}
              <span class="text-gray-500 dark:text-gray-400"></span>
              {/* <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>
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
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              LAUNCH
            </a>
          </div>

          {/* <!-- Pricing Card 3 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Pioneer</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              If you're in it for the long haul, this plan is tailor-made for
              you.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$100</span>
              {/* For adding per month */}
              <span class="text-gray-500 dark:text-gray-400"></span>
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
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
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
