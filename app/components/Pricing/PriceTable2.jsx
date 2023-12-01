import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const PriceTable2 = () => {
  // A close icon will render a red cross and a Done icon will give a green tick
  // Just make changes to the prices array

  const prices = [
    {
      title: "Current",
      per: "",
      price: "30+ hrs",
      description:
        "Your current situation where the idea is nowhere near Launch",
      features: [
        {
          text: "Creating from scratch",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Unorganized flow of work",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Searching for resources",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Launch: Delayed",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Targets: Missed",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      buttonDisplay: "hidden",
      buttonText: "Before One Kadian",
      link: "",
    },
    {
      title: "Innovator",
      per: "/month",
      price: "$70",
      description: "Take off with us and build your SaaS venture at warp speed",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Unavailable",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      buttonDisplay: "",
      buttonText: "LAUNCH",
      link: "https://buy.stripe.com/5kA8zVgVV2Phbi86oo",
    },
    {
      title: "Pioneer",
      per: "/month",
      price: "$100",
      description:
        "If you're in it for the long haul, this plan is tailor-made for you.",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Available",
          Icon: <DoneIcon className="text-green-400" />,
        },
      ],
      buttonDisplay: "",
      buttonText: "LAUNCH",
      link: "https://buy.stripe.com/7sI8zV6hh61tgCs9AB",
    },
  ];

  return (
    <div className="bg-gray-900 py-24 lg:py-32">
      <div className="space-y-3 mb-12 text-center p-2">
        <h2 className="text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
          Pricing
        </h2>
        <p className="mb-5 font-light text-gray-300 sm:text-xl">
          Buy once, Launch forever
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5">
          {prices.map((price, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 flex flex-col p-6 text-center rounded-xl min-h-[500px] justify-center"
            >
              <h3 className="mb-4 text-3xl text-white font-medium">
                {price.title}
              </h3>
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl text-gray-100 font-bold">
                  {price.price}
                </span>
                {/* Monthly pricing? just uncomment this span below */}
                {/* <span className="text-xl font-semibold text-gray-300">
                  {price.per}
                </span> */}
              </div>
              <ul className="mb-8 space-y-4 text-left mx-auto">
                {price.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    {feature.Icon} {/* Use the predefined icon */}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={price.link}
                className={`text-white bg-primary-700 ${price.buttonDisplay} font-medium rounded-lg w-fit mx-auto text-sm px-20 py-3 text-center`}
              >
                {price.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTable2;
