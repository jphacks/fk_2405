// components/add-modal.tsx
"use client";

import { useState } from "react";

type Props = {
  setIsOpen: (content: boolean) => void;
  onAddSns: (sns: { title: string; id: string }) => void;
};

export const AddModal = ({ setIsOpen, onAddSns }: Props) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const handleRegister = () => {
    const newEntry = { title, id };
    const snsList = JSON.parse(localStorage.getItem("snsInfo") || "[]");
    snsList.push(newEntry);
    localStorage.setItem("snsInfo", JSON.stringify(snsList));

    onAddSns(newEntry); // Update the parent state with the new entry
    setIsOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="w-screen h-screen bg-black opacity-80 fixed top-0 z-10"></div>
      <div className="z-20 fixed bottom-20">
        <div className="w-[90vw] mx-[5vw] aspect-video bg-white rounded-xl flex justify-center items-center shadow-lg flex-col">
          <h1>SNS情報の追加</h1>
          <input
            type="text"
            placeholder="SNS名"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[80vw] mt-4 h-[40px] text-sm shadow-inner rounded-xl px-2 bg-gray-100"
          />
          <input
            type="text"
            placeholder="@ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-[80vw] mt-4 h-[40px] text-sm shadow-inner rounded-xl px-2 bg-gray-100"
          />
        </div>
        <div className="w-[90vw] h-12 mx-[5vw] grid grid-cols-4 mt-5 gap-2">
          <div
            className="col-span-3 bg-custom_blue rounded-lg flex justify-center items-center text-white font-bold"
            onClick={handleRegister}
          >
            登録
          </div>
          <div
            className="col-span-1 bg-custom_red rounded-lg flex justify-center items-center text-white font-bold text-sm"
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </div>
        </div>
      </div>
    </div>
  );
};
