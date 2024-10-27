"use client";

import { useSearchParams } from "next/navigation";

export const UserCard = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const username = "北原まさお";

  return (
    <div className="w-[90vw] mx-[5vw] aspect-video bg-custom_orange rounded-xl flex justify-center items-center font-bold shadow-lg text-white flex-col">
      <p className="text-xl mb-4">{title}</p>
      <h1 className="text-3xl mb-4">{username}</h1>
      {/* <div className="flex gap-2 text-sm">
        <p>ポイント： 12pt</p>
        <p>会話数： 9人</p>
      </div> */}
    </div>
  );
};
