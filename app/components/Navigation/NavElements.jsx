"use client";

import Link from "next/link";

//  Don't forget to add the href as an id to the desired section my friend!

const navigation = [
  { name: "Pricing", href: "#pricing-section2" },
  { name: "Stack", href: "#stack-section" },
  { name: "FAQ", href: "#faq-section" },
];

const NavElements = () => {
  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="text-lg font-semibold leading-6 text-gray-100"
          onClick={(e) => handleScroll(e, item.href.substring(1))}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavElements;
