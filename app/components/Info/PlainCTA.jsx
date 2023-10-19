export default function PlainCTA() {
  const CTAcopy = {
    CTAHeader1: "End of Procrastination",
    CTAHeader2: "Just ship it!",
    CTADescription:
      "Fuel your entrepreneurial journey with OneKadian. Turn your ideas into reality and launch your SaaS venture with confidence.",
  };

  // Call to Action section
  return (
    <div className="bg-gray-900 py-12 lg:py-2">
      <div class="py-8 px-4 bg-gray-900 mx-auto sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-300"> */}
          <h2 class="text-3xl text-center mb-2 lg:text-4xl font-semibold text-white sm:leading-[55px] sm:tracking-tight">
            Build with speed
          </h2>
          <p class="mb-6 font-light text-gray-300 md:text-lg">
            Don't reinvent the wheel
          </p>
          <a
            href="#"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Execute your idea
          </a>
        </div>
      </div>
    </div>
  );
}
