"use client";

import { RxAvatar } from "react-icons/rx";
import Avatar from "../general/Avatar";
import { Rating } from "@mui/material";

const UserComment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg border-slate-200 py-2 mb-2">
      {/* <Avatar image={prd?.user?.image} /> */}
      <div className=" flex items-center gap-2 mb-2">
        <RxAvatar size={45} />
        <div className="">
          <div className="">{prd.user.name}</div>
          <Rating name="read-only" value={prd?.user?.rating} readOnly />
        </div>
      </div>
      <div className="text-slate-500">{prd?.comment}</div>
    </div>
  );
};

export default UserComment;
