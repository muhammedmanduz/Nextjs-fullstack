"use client";

import { RxAvatar } from "react-icons/rx";
import Avatar from "../general/Avatar";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border-b w-full md:w-1/3 p-2 rounded-lg border-slate-200 py-2 mb-2">
      {/* <Avatar image={prd?.user?.image} /> */}
      <div className=" flex items-center gap-2 mb-2">
        <RxAvatar size={25} />
        <div className="">{prd.user.name}</div>
      </div>
      <div className="text-slate-500">{prd?.comment} asfsaggsRHAŞLHMAM</div>
    </div>
  );
};

export default Comment;
