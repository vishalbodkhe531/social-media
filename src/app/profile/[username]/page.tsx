// "use client";
import {
  getProfileByUserName,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export const generateMetadata = async ({
  params,
}: {
  params: { username: string };
}) => {
  const user = await getProfileByUserName(params.username);

  if (!user) return;
  return {
    title: `Profile | ${user.name ?? user.userName}`,
    description: user.bio || `Check out ${user.userName}'s profile`,
  };
};

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const user = await getProfileByUserName(params.username);
  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
};

export default ProfilePage;
