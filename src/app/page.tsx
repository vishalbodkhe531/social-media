import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6">
          {user ? <CreatePost /> : null}

          <div className="space-y-6">
            {/* {posts.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={dbUserId} />
            ))} */}
            All the Post here
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 sticky top-20">
          {/* <WhoToFollow /> */}
        </div>
      </div>
    </>
  );
};

export default page;
