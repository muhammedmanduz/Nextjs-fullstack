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
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
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

  const addToBasketIncrease = useCallback((product: CardProductProps) => {
    if (product.quantity >= 10) {
      return toast.error("Daha fazla eklenemez!");
    }

    setCartPrdcts((prev) => {
      if (!prev) return prev;

      const updatedCart = [...prev];
      const existingIndex = prev.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        };

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Ürün adedi arttırıldı");
        return updatedCart;
      }

      return prev;
    });
  }, []);

  const addToBasketDecrease = useCallback((product: CardProductProps) => {
    if (product.quantity <= 1) {
      return toast.error("Daha az eklenemez!");
    }

    setCartPrdcts((prev) => {
      if (!prev) return prev;

      const updatedCart = [...prev];
      const existingIndex = prev.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity - 1,
        };

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Ürün adedi azaltıldı");
        return updatedCart;
      }

      return prev;
    });
  }, []);

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success("Tüm Ürünler Sepetten Silindi...");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);

  const removeFromCart = useCallback((product: CardProductProps) => {
    if (cartPrdcts) {
      const filteredProducts = cartPrdcts.filter(
        (cart) => cart.id !== product.id
      );
      setCartPrdcts(filteredProducts);
      toast.success("Ürün Sepetten Silindi...");
      localStorage.setItem("cart", JSON.stringify(filteredProducts));
    }
  }, []);

  let value = {
    productCartQty,
    addToBasket,
    removeFromCart,
    cartPrdcts,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
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
