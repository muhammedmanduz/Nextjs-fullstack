"use client";

import PageContainer from "../containers/page";

const DetailClient = ({ product }: any) => {
  return (
    <div className="my-10">
      <PageContainer>{product?.name}</PageContainer>
    </div>
  );
};

export default DetailClient;
