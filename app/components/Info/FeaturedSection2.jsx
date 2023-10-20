import BuildIcon from "@mui/icons-material/Build";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import toolkit from "../../Images/toolkit.png";
import Image from "next/image";

const featuredCopy = {
  featuredHeading: "Resources found",
  featuredDescription:
    "Cut down on your research with the constantly updating resource sheet.",
};

const features = [
  {
    name: "Build with",
    description:
      "Don't waste time browsing, use our list of 50+ tools to create what you want.",
    icon: BuildIcon,
  },
  {
    name: "Leverage AI",
    description:
      "Integrating AI in your product? Great, we've found dozens that can help.",
    icon: SmartToyIcon,
  },
  {
    name: "Read the secrets",
    description:
      "Use our curated list of the writeups for builders to read and implement.",
    icon: MenuBookIcon,
  },
];

export default function FeaturedSection2() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:max-w-none flex flex-col-reverse lg:flex-row justify-center items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0">
          <div className="flex-1">
            <Image
              src={toolkit}
              alt="Product screenshot"
              className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl p-2 lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-white">
                {featuredCopy.featuredHeading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {featuredCopy.featuredDescription}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-300"
                        aria-hidden="true"
                      />
                      {feature.name}:
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
