import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const PrivacyContent = [
  {
    heading: "1. Information Collection",
    description:
      "OneKadian may collect personal information when necessary to provide you with our services. We will inform you of the purposes for which your information is collected and how it will be used.",
  },
  {
    heading: "2. Account Sign-Up",
    description:
      "You may sign up for OneKadian using your Google account. When you do so, your account username will be prefilled with your name and your public profile picture.",
  },
  {
    heading: "3. Data Retention and Protection",
    description:
      "We will retain collected information only for as long as necessary to provide you with our services. We take reasonable measures to protect your data from loss, theft, unauthorized access, disclosure, copying, use, or modification.",
  },
  {
    heading: "4. Third-Party Links",
    description:
      "Our website may contain links to external sites not operated by us. We are not responsible for the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.",
  },
  {
    heading: "5. Refusal of Information",
    description:
      "You are free to refuse to provide personal information, with the understanding that we may be unable to provide certain services as a result.",
  },
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <ul>
                {PrivacyContent.map((item, index) => (
                  <li key={index} className="mt-8">
                    <strong>{item.heading}</strong>
                    <br />
                    {item.description}
                  </li>
                ))}
              </ul>
              <p className="mt-12">
                <strong>Cancellation and Refund</strong>
                <br />
                To request a refund, please contact us directly at
                manageanirudh@gmail.com within 2 hours of your subscription
                purchase. Refund requests will be reviewed on a case-by-case
                basis, and we will respond to your request promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
