import DetailClient from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";
import React from "react";

type DetailProps = {
  productId?: string;
};
const Detail = async ({ params }: { params: DetailProps }) => {
  const { productId } = params;

  //ürün bulduk
  const product = products?.find((product) => product.id === productId);
  console.log(product, "product");

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
