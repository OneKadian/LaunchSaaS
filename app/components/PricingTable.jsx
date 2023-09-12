import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const PricingTable = () => {
  return (
    <section class="bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white">
            Curated for geniuses like you
          </h2> */}
          <p class="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">
            A mere boiler plate won't help you launch in less than 30 minutes.
            You'll also get Templates, roadmaps and a community of serious
            builders
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Current</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              {/* Assuming you work for $25/hr. Higher than that? More money lost */}
              Your current situation where the idea is nowhere near Launch
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$600</span>
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
                <span> Writing all the copy </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <CloseIcon className="text-red-600" />
                <span>
                  Resources: <span class="font-semibold">None</span>
                </span>
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
                  Likely Outcome: <span class="font-semibold">Burnout</span>
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
          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">Space Ship</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              Best for those who wish to build fast, fail fast and iterate
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
                <span>Boiler Plate with clear instructions</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>Prompts for copywriting</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="font-semibold">Resource sheet included</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="font-semibold">
                    Organized flow with roadmaps
                  </span>
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
              Get started
            </a>
          </div>
          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-900 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-white">
            <h3 class="mb-4 text-2xl font-semibold">UFO</h3>
            <p class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              Relevant for those who plan to stick with an idea and improve over
              time
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
                <span>Boiler Plate with clear instructions</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>Prompts for copywriting</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="font-semibold">Resource sheet included</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <DoneIcon className="text-green-400" />
                <span>
                  <span class="font-semibold">
                    Organized flow with roadmaps
                  </span>
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
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
