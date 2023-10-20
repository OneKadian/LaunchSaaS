import LayersIcon from "@mui/icons-material/Layers";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import components from "../../Images/components.png";
import Image from "next/image";

const featuredCopy = {
  // featuredHeading: "Everything made",
  featuredHeading: "Code written",
  featuredDescription:
    "All the code you'll need to launch is ready, use it to build products swiftly.",
};

const features = [
  {
    name: "Ready to use Components",
    description:
      "Don't create from scratch, build quickly using 15+ components.",
    icon: LayersIcon,
  },
  {
    name: "Payments, Auth and DB",
    description:
      "Save hours by not having to setup, simply put keys and get started",
    icon: VpnKeyIcon,
  },
  {
    name: "Clear Instructions",
    description:
      "Documentation, templates & notes to ensure its easy for first timers and juniors too.",
    icon: LibraryBooksIcon,
  },
];

export default function FeaturedSection() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 lg:flex lg:items-center">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-semibold font-semibold sm:leading-[55px] sm:tracking-tight text-white">
                Deploy faster
              </h2> */}
              {/* <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"> */}
              <h2 class="text-3xl p-2 lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-white">
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
          <div className="flex justify-center items-center">
            <Image
              src={components}
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
