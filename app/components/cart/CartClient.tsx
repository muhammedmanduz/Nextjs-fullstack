"use client";

import UseCart from "@/hooks/UseCart";
import PageContainer from "../containers/page";
import Image from "next/image";
import Button from "../general/Button";

const CartClient = () => {
  const { cartPrdcts } = UseCart();

  console.log(cartPrdcts);

  if (!cartPrdcts || cartPrdcts.length === 0) {
    return <div className="">Sepetinizde ürün bulunmamaktadır...</div>;
  }

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className=" flex gap-3 text-center  items-center border-b py-3">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı </div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5"></div>
        </div>

        <div>
          {cartPrdcts.map((cart) => (
            <div
              className="flex items-center justify-between text-center my-5"
              key={cart.id}
            >
              <div className="w-1/5 flex items-center justify-center">
                <Image
                  src={cart.image}
                  width={40}
                  height={40}
                  alt={cart.name}
                />
              </div>
              <div className="w-1/5 flex items-center justify-center">
                {cart.name}
              </div>
              <div className="w-1/5">2</div>
              <div className="w-1/5 flex items-center justify-center text-orange-600">
                $ {cart.price}
              </div>
              <div className="w-1/5  md:250px">
                <Button text="Ürün Sil" small onClick={() => {}} />
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
