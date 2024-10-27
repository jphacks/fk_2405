import Image from "next/image";
import Link from "next/link";

import bell from "../../../public/bell-solid.svg";
import idCard from "../../../public/id-card-clip-solid.svg";
import trophy from "../../../public/trophy-solid.svg";

export const Footer = () => {
  return (
    <div className="fixed bottom-6 w-[90vw] sm:w-[390px] mx-[5vw] h-[48px] flex justify-center items-center bg-custom_beige rounded-full shadow-md">
      <div className="w-[80vw] flex justify-around text-custom_orange">
        <Link href={"/alert"}>
          <Image
            src={bell}
            alt="bell image"
            className="h-[32px] w-[32px] text-custom_orange"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={idCard}
            alt="idCard image"
            className="w-[32px] text-custom_orange"
          />
        </Link>

        <Link href={"/ranking"}>
          <Image
            src={trophy}
            alt="trophy image"
            className="w-[32px] text-custom_orange"
          />
        </Link>
      </div>
    </div>
  );
};
