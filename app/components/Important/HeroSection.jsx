import Image from "next/image";
import SingleTestimonial from "../Extras/SingleTestimonial";
import notion from "../../Images/notionTemplate.png";
import Link from "next/link";

const Hero2 = () => {
  const openingCopy = {
    // announcementText: "Literally everything you need to get started",
    announcementText:
      "Impact-Site-Verification: fbee1ac6-8494-4942-afaf-d2205b425d0a",
    // titleText: "Launch your SaaS in the next 30 Minutes",
    titleText: "Impact-Site-Verification: fbee1ac6-8494-4942-afaf-d2205b425d0a",
    subtitleText:
      "Code Boilerplate, resource sheet and templates to turn developers into founders and help them launch instantly",
  };

  return (
    <section id="heroOne" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="py-12 md:py-20">
          <SingleTestimonial />
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {/* <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {openingCopy.announcementText}
            </p> */}
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {openingCopy.titleText}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-xl font-medium text-gray-400 dark:text-slate-400">
                {openingCopy.subtitleText}
              </p>
              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch your idea
                </Link>
                <Link
                  href="#"
                  className="rounded-md border border-gray-300 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Template ➝
                </Link>
              </div> */}
              {/* <div className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:justify-center sm:gap-x-6">
                <Link
                  href="#"
                  className="w-full sm:w-auto rounded-md bg-blue-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch your idea
                </Link>
                <Link
                  href="#"
                  className="w-full sm:w-auto rounded-md border border-gray-300 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Template ➝
                </Link>
              </div> */}
              <div className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:justify-center sm:gap-x-6">
                <Link
                  href="#"
                  className="w-[360px] sm:w-auto mx-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch your idea
                </Link>
                <Link
                  href="#"
                  className="w-[360px] sm:w-auto mx-2 rounded-md border border-gray-300 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Template ➝
                </Link>
              </div>
            </div>
          </div>
          {Image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                src={notion}
                alt="notion"
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
