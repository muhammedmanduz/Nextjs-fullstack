"use client";
import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import textClip from "@/utils/TextClip";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  let prodoductRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div
      onClick={() => router.push(`${product.id}`)}
      className="w-[240px] shadow-lg p-2 border cursor-pointer flex flex-col flex-1  rounded-lg"
    >
      <div className="relative h-[150px]">
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.name}
          className="object-contain"
        />
      </div>
      <div className="text-center space -y-1">
        <div className="text-center mt-2 text-xl">{textClip(product.name)}</div>
        <Rating name="read-only" value={prodoductRating} readOnly />

        <div className="text-orange-600 text-lg md:text-xl">
          ${product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
