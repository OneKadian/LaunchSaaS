const Frequently = () => {
  const Questions = [
    {
      Question: "What is OneKadian?",
      Answer:
        "OneKadian is the solution to your launch procrastrination, a pack to help you launch instantly and scale from over there",
    },
    {
      Question: "If I can build it, why should I buy it?",
      Answer:
        "In the words of the great Marc louvion, 'Others are launching while you're building' ",
    },
    {
      Question: "How do I get started?",
      Answer:
        "Choose a plan, get access to the resources with the instruction video, put in your keys, follow the roadmap and Launch!",
    },
    {
      Question: "What all do I get?",
      Answer:
        "OneKadian is a combination of a boilerplate with launch instructions, templates, resource sheet, roadmaps and a subscription to the newsletter",
    },
    // {
    //   Question: "Is the stack open to change?",
    //   Answer:
    //     "Definitely! I'm open to change, if I find something new and better, I'll use that. If you have a different stack, that won't be a problem too",
    // },
    {
      Question: "How often do I get updates?",
      Answer:
        "I code and build regularly, thus something new would be found every other day, so you can expect regular updates",
    },
    {
      Question: "Is it really possible to launch in 30 minutes?",
      Answer:
        "Yes and No. Yes, if you have an idea and are ready to launch with a landing page ASAP to validate and, No if you plan to build the perfect product before launching :)",
    },
    {
      Question: "What if my question is not listed here",
      Answer:
        "Not a problem, reach out to me via Mail, twitter or LinkedIn and I'll be very happy to answer. Links in Footer.",
    },
  ];

  return (
    <section className="bg-gray-900 lg:py-32">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="flex justify-center">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white text-center lg:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 sm:text-xl">
              Unlock your Launch potential, Discover more about OneKadian
            </p>
          </div>
        </div>

        {/* Collection */}
        <div className="text-gray-300">
          {/* FAQ begins here */}
          <div className="max-w-screen-xl mx-auto px-5 bg-gray-900 flex justify-center">
            <div className="grid divide-y divide-neutral-200 w-full mx-auto mt-8">
              {Questions.map((que) => (
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span> {que.Question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-300 mt-3 group-open:animate-fadeIn">
                      {que.Answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
