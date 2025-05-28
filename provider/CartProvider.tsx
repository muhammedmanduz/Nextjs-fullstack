import { CartContextProvider } from "@/hooks/UseCart";
import React from "react";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
