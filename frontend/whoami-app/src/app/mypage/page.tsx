// Mypage.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Title } from "@/components/ui/title";
import { AddModal } from "./components/add-modal";
import { QrCodeGenerator } from "./components/qrcode";
import Plus from "../../../public/plus-solid.svg";
import Qrcode from "../../../public/qrcode-solid.svg";

type SnsInfo = {
  title: string;
  id: string;
};

export default function Mypage() {
  const [isOpen, setIsOpen] = useState(false);
  const [qrSelect, setQrSelect] = useState("");
  const [snsList, setSnsList] = useState<SnsInfo[]>([]);

  useEffect(() => {
    const savedSnsList = JSON.parse(localStorage.getItem("snsInfo") || "[]");
    setSnsList(savedSnsList);
  }, []);

  const handleQrClick = (id: string) => {
    setQrSelect((prev) => (prev === id ? "" : id)); // Toggle QR code display
  };

  const handleAddSns = (sns: SnsInfo) => {
    setSnsList((prev) => [...prev, sns]);
  };

  return (
    <div className="mt-20 pb-[20vh]">
      {isOpen && <AddModal setIsOpen={setIsOpen} onAddSns={handleAddSns} />}
      <Title title={"マイページ"} />
      <div className="w-[90vw] mx-[5vw]">
        <div className="flex flex-col justify-center items-center font-bold">
          <p className="border-b-2 text-lg">ユーザー名</p>
          <h1 className="mt-4 text-3xl">北原まさお</h1>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center font-bold">
          <div className="w-[90vw] grid grid-cols-9 items-center">
            <p className="col-span-3 col-start-4 text-center text-lg border-b-2">
              SNS
            </p>
            <div className="col-span-1 col-start-9 flex justify-end">
              <Image
                src={Plus}
                alt="追加ボタン"
                className="w-5 p-1 border-[1px] border-gray-400 rounded-md"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          {/* Display each SNS entry */}
          {snsList.map((sns, index) => (
            <div key={index} className="w-[90vw] mt-8 grid grid-cols-9">
              <h1 className="col-span-3">{sns.title}</h1>
              <p className="col-span-5">{sns.id}</p>
              <div className="col-span-1 flex justify-end">
                <Image
                  src={Qrcode}
                  alt="QRコード表示"
                  className="w-5 cursor-pointer"
                  onClick={() => handleQrClick(sns.id)}
                />
              </div>
            </div>
          ))}

          {/* Conditionally render QR code generator */}
          {qrSelect && (
            <div className="fixed top-[40vh] left-[20vw]">
              <QrCodeGenerator text={qrSelect} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
