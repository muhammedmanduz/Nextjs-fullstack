"use client";

import UseCart from "@/hooks/UseCart";
import { IoBasket } from "react-icons/io5";

const CardCount = () => {
  const { cartPrdcts } = UseCart();

  return (
    <div className="hidden md:flex relative">
      <IoBasket size={30} />
      <div className=" absolute -top-2 -right-2  bg-orange-900 h-5 w-5 flex items-center justify-center text-white rounded-full ">
        {cartPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;
