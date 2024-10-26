import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../../public/Logo.svg";

export const Header = () => {
  return (
    <div className="fixed top-0 w-screen sm:w-[390px] h-[64px] bg-white shadow-md flex justify-center items-center">
      <Link href={"/"}>
        <Image src={LogoImg} alt="タイトルロゴ"></Image>
      </Link>
    </div>
  );
};
