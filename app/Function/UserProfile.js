"use server";
import { currentUser } from "@clerk/nextjs";
import Navbar from "../components/Navbar";

export default async function userProfile() {
  await currentUser();
}
