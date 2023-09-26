import FlagIcon from "@mui/icons-material/Flag";
import SpeedIcon from "@mui/icons-material/Speed";

const stepArray = [
  {
    Icon: <FlagIcon />,
    Heading: "Step 1: Grab your keys",
    Description:
      "Once you've the boilerplate and all the resources in your hand, you're already half way through. Follow the roadmap, grab your keys and get your to-be SaaS running",
  },
  {
    Icon: <SpeedIcon />,
    Heading: "Step 2: Grab your keys",
    Description:
      "Once you've the boilerplate and all the resources in your hand, you're already half way through.",
  },
  {
    Icon: <FlagIcon />,
    Heading: "Step 1: Grab your keys",
    Description:
      "Once you've the boilerplate and all the resources in your hand, you're already half way through.",
  },
];

const Steps = () => {
  return (
    <div class=" bg-gray-900 py-8">
      <div class="text-center">
        {/* <h2 class="text-4xl sm:text-5xl font-semibold sm:leading-[55px] sm:tracking-tight"> */}
        <h2 class="text-3xl p-2 lg:text-4xl font-semibold text-white sm:leading-[55px] sm:tracking-tight">
          Launch in 3 Steps
        </h2>
        <p class="text-gray-300 text-xl p-2">
          Launching a Saas doesn't get any simpler than this
        </p>
      </div>
      <div class="mx-4 my-8 sm:mx-8 sm:my-10">
        <div class="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 item">
          {stepArray.map((step) => (
            <div class="flex flex-col p-8 bg-gray-800 rounded-xl border border-gray-700">
              <div class="flex items-center pb-4">
                <span class="rounded-full mr-5 p-3 bg-gray-200 text-black">
                  {step.Icon}
                </span>
                <h3 class="text-xl font-medium text-white">{step.Heading}</h3>
              </div>
              <div class="mt-3 text-gray-300">
                <p>{step.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
