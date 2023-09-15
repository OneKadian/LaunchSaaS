const FooterItems = [
  "Privacy Policy",
  "Pricing",
  "Product",
  "Twitter",
  "LinkedIn",
];

const Footer = () => {
  return (
    <footer class="p-4 bg-gray-900 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          // href="#"
          class="flex justify-center items-center text-2xl font-semibold text-white"
        >
          OneKadian
        </a>
        <p class="my-6 text-gray-500">
          Everything you need to execute that idea today and launch your product
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          {FooterItems.map((foot) => (
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                {foot}
              </a>
            </li>
          ))}
        </ul>
        <span class="text-sm text-gray-500 sm:text-center">
          Made with <a href="#" class="hover:underline"></a>
          ❤️ by Anirudh Kadian
        </span>
      </div>
    </footer>
  );
};

export default Footer;
