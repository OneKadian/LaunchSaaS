import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/logo.png";
import SideMenu from "./SideMenu";

const navigation = [
  { name: "Product", href: "/sign-in" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = async () => {
  const user = await currentUser();

  return (
    <header className="absolute inset-x-0 top-0 z-5">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-gray-900"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-10 w-auto lg:h-11" src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center">
            {!user ? (
              <Link
                href="/sign-in"
                className="text-md font-semibold leading-6 text-gray-100 mx-4"
              >
                Log in
              </Link>
            ) : (
              <UserButton afterSignOutUrl="/" className="" />
            )}
            <SideMenu className="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
