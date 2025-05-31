"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import UserComment from "./Comment";
import UseCart from "@/hooks/UseCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};
const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  console.log(cartPrdcts, "cartPrdcts");

  useEffect(() => {
    //sayfa yüklendiğinde
    setDisplayButton(false);

    let controlDisplay: any = cartPrdcts?.findIndex(
      (cart) => cart.id === product.id
    );

    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts]);

  const increaseFunc = () => {
    if (cardProduct.quantity === 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunc = () => {
    if (cardProduct.quantity === 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px]  w-[200px] md:w-[400px] flex-1">
            <Image src={product.image} fill alt={product.image} />
          </div>
          <div className="w-1/2 spcace-y-3 ">
            <div className="text-xl md:text-2xl">{product.name}</div>
            <Rating
              className="my-2"
              name="read-only"
              value={productRating}
              readOnly
            />
            <div className="text-slate-500">{product.description}</div>
            <div className="flex items-center gap-2">
              <div className="">STOK DURUMU:</div>

              {product.inStock ? (
                <div className="text-green-500">Ürün Stokta Mevcut</div>
              ) : (
                <div className="text-red-500">Ürün Stokda Yok</div>
              )}
            </div>
            <div className="text-orange-600 text-lg md:text-2xl">
              ${product.price}
            </div>

            {displayButton ? (
              <>
                <Button
                  text=" Ürün Sepete Ekli"
                  small
                  outline
                  onClick={() => {}}
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                  cardProduct={cardProduct}
                />
                <Button
                  text="Sepete Ekle"
                  small
                  onClick={() => addToBasket(cardProduct)}
                />
              </>
            )}
          </div>
        </div>
        <div className="">
          {product.reviews?.map((prd: any) => (
            <UserComment
              prd={prd}
              key={prd.id}
              className="my-5 p-3 border rounded-lg"
            />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
