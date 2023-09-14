import Image from "next/image";
import nextLogo from "../Images/NextJSLogo.png";
import stripeLogo from "../Images/stripeLogo.png";
import supabaseLogo from "../Images/SupabaseLogo.png";
import tailwindLogo from "../Images/TailwindCSSLogo.png";
import mailLogo from "../Images/mailLogo.png";
// import vercelLogo from "../Images/vercelLogo.png";
import apiLogo from "../Images/ApiLogo.png";

const Features = () => {
  const stack = [
    {
      Image: nextLogo,
      Heading: "Next JS",
      Description:
        "The new generation web framework for the Frontend and environment ",
    },
    {
      Image: stripeLogo,
      Heading: "Stripe",
      Description:
        "Cutting-edge payment platform for seamless transactions + webhooks ",
    },
    {
      Image: supabaseLogo,
      Heading: "Supabase",
      Description:
        "Next-gen open-source database with real-time updates for your SaaS",
    },
    {
      Image: tailwindLogo,
      Heading: "Tailwind CSS",
      Description:
        "Utility-first CSS framework for rapid and responsive web development",
    },
    {
      Image: apiLogo,
      Heading: "API",
      Description:
        "Build and scale your SaaS with APIs, using tRPC & RTK query",
    },
    // {
    //   Image: vercelLogo,
    //   Heading: "Vercel",
    //   Description:
    //     "Cloud platform for seamless SaaS deployment, hosting, and scaling",
    // },
    {
      Image: mailLogo,
      Heading: "Mail",
      Description:
        "Own your audience with email communication via ConvertKit and Resend",
    },
  ];

  return (
    <section class="bg-gray-900">
      <div class="py-32 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for Speed
          </h2>
          <p class="text-gray-300 sm:text-xl dark:text-gray-400">
            Unleash innovation, save time, and launch swiftly with our solution.
          </p>
        </div>
        {/* Collection */}
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {stack.map((st) => (
            <div>
              <div class="flex justify-center items-center mb-4 w-10 border border-white h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <Image
                  src={st.Image}
                  alt="nextJSlogo"
                  className="w-full h-full"
                  width={40}
                  height={40}
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                {st.Heading}
              </h3>
              <p class="text-gray-300 dark:text-gray-400">{st.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
