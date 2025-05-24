import Image from "next/image";
import hepsiburada from "@/app/assets/hepsiburada.jpeg";

const Banner = () => {
  const url =
    "https://www.pexels.com/tr-tr/fotograf/sisli-dag-manzarasinda-rahat-alp-kulubeleri-32058694/";
  return (
    <div className="h-[237px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-fullS">
        <Image src={hepsiburada} alt="hepsiburada" className="object-cover" />
      </div>
    </div>
  );
};

export default Banner;
