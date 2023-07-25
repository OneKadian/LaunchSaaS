import { currentUser } from "@clerk/nextjs";

// export default async function UserProfile() {
//   user = await currentUser();
// }

const userProfile = async () => {
  return (user = await currentUser());
};

export default userProfile;
