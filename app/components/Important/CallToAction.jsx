import Link from "next/link";
import notion from "../../Images/notionTemplate.png";
import Image from "next/image";

export default function CallToAction() {
  const CTAcopy = {
    CTAHeader1: "End of Procrastination",
    CTAHeader2: "Just ship it!",
    CTADescription:
      "Fuel your entrepreneurial journey with OneKadian. Turn your ideas into reality and launch your SaaS venture with confidence.",
  };

  // Call to Action section
  return (
    <div className="bg-gray-900 py-24 lg:py-32 ">
      <div className="mx-auto sm:px-6 lg:px-8 ">
        <div className="relative overflow-hidden bg-gray-900 px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Text section */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {CTAcopy.CTAHeader1}
              <br />
              {CTAcopy.CTAHeader2}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {CTAcopy.CTADescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {/* Image section */}
          {/* <div className="mt-16 h-80 lg:mt-8">
            <img
              className=" left-0 top-0 w-[50rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div> */}
          <div className="mt-12 lg:mt-0 flex justify-center items-center">
            <Image
              src={notion}
              alt="Product screenshot"
              className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
