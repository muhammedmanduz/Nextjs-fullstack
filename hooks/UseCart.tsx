"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
}
const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState<number>(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem);

    setCartPrdcts(getItemParse);
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Ürün Sepete Eklendi...");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const removeFromCart = useCallback((product: CardProductProps) => {}, []);

  let value = {
    productCartQty,
    addToBasket,
    removeFromCart,
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
