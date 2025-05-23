import Image from "next/image";
import hepsiburada from "@/app/assets/hepsiburada.jpeg";

const Banner = () => {
  const url =
    "https://www.pexels.com/tr-tr/fotograf/sisli-dag-manzarasinda-rahat-alp-kulubeleri-32058694/";
  return (
    <div className="h-[237px]">
      <div className="h-[137px]">
        <Image src={hepsiburada} width={200} alt="hepsiburada" />

        {/* <Image src={url} width={200} height={200} alt="remote-pic" /> */}
      </div>
    </div>
  );
};

export default Banner;
