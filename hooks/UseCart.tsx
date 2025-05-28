"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
}
const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState<number>(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
  };

  return <CartContext.Provider value={value} {...props} />;
};

import React from "react";

const UseCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Bir hata durumu oluştu.");
  }
  return context;
};

export default UseCart;
