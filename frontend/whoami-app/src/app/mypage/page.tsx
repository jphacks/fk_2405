"use client";

import { useState } from "react";
import Image from "next/image";

import { Title } from "@/components/ui/title";
import { AddModal } from "./components/add-modal";

import Plus from "../../../public/plus-solid.svg";
import Qrcode from "../../../public/qrcode-solid.svg";

export default function Mypage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-20 pb-[20vh]">
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
      <Title title={"マイページ"} />
      <div className="w-[90vw] mx-[5vw]">
        <div className="flex flex-col justify-center items-center font-bold">
          <p className="border-b-2 text-lg">ユーザー名</p>
          <h1 className="mt-4 text-3xl">北原將雄</h1>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center font-bold">
          <div className="w-[90vw] grid grid-cols-9 items-center">
            <p className="col-span-3 col-start-4 text-center text-lg border-b-2">
              SNS
            </p>
            <div className="col-span-1 col-start-9  flex justify-end">
              <Image
                src={Plus}
                alt="追加ボタン"
                className="w-5 p-1 border-[1px] border-gray-400 rounded-md"
                onClick={() => setIsOpen(true)}
              ></Image>
            </div>
          </div>

          <div className="w-[90vw] mt-8 grid grid-cols-9">
            <h1 className="col-span-3">SNS名</h1>
            <p className="col-span-5">@XXXXXXXXXX</p>
            <div className="col-span-1 flex justify-end">
              <Image src={Qrcode} alt="QRコード表示" className="w-5"></Image>
            </div>
          </div>

          <div className="w-[90vw] mt-8 grid grid-cols-9">
            <h1 className="col-span-3">SNS名</h1>
            <p className="col-span-5">@XXXXXXXXXX</p>
            <div className="col-span-1 flex justify-end">
              <Image src={Qrcode} alt="QRコード表示" className="w-5"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}