import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../../public/Logo.svg";
import UserLogo from "../../../public/circle-user-solid.svg";

export const Header = () => {
  return (
    <div className="fixed top-0 w-screen sm:w-[390px] h-[64px] bg-white shadow-md grid grid-cols-9 items-center">
      <Link href={"/"} className=" col-span-1 col-start-5">
        <Image src={LogoImg} alt="タイトルロゴ"></Image>
      </Link>
      <Link href={"/mypage"} className="col-span-1 col-start-9">
        <Image src={UserLogo} alt="マイページ" className="w-6"></Image>
      </Link>
    </div>
  );
};
