import "./globals.css";
import { ClerkProvider, UserProfile } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import userProfile from "./Function/UserProfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaaS Template",
  description: "This is the software you need",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Navbar />
        {/* <UserProfile /> */}
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
