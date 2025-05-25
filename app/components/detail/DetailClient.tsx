"use client";

import Image from "next/image";
import PageContainer from "../containers/page";
import Counter from "../general/Counter";
import { useState } from "react";

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
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  return (
    <div className="my-10">
      <PageContainer>
        <div className=" block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-2/3 flex-1">
            <Image src={product.image} fill alt={product.name} />
          </div>
          <div className="w-1/4 ">
            <div className="text-xl md:text-2xl">{product.name}</div>
            <div className="text-slate-500">{product.description}</div>
            <div className="flex items-center gap-10">
              <div className="">STOK DURUMU:</div>
              {product.inStock ? (
                <div className="text-green-500">Ürün Stokta Mevcut</div>
              ) : (
                <div className="text-red-500">Ürün Stokda Yok</div>
              )}
            </div>
            <Counter cardProduct={cardProduct} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
