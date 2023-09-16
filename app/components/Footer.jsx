const FooterItems = ["LinkedIn", "Mail", "Twitter", "Legal"];

// Update the array above, limit to 4 for better ux and you have a footer ready

const Footer = () => {
  return (
    <footer class="p-4 bg-gray-900 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <p
          // href="#"
          class="flex justify-center items-center text-2xl font-semibold text-white"
        >
          OneKadian
        </p>
        <p class="my-6 text-gray-500">
          Everything you need to execute that idea today and launch your product
        </p>
        {/* Footer Items */}
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          {FooterItems.map((foot) => (
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6 ">
                {foot}
              </Link>
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
