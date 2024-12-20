"use client";

import Link from "next/link";

type Props = {
  title: string;
  userName: string;
  setScannedContent: (content: string) => void;
};

export const Modal = ({ title, userName, setScannedContent }: Props) => {
  return (
    <div>
      <div
        className="w-screen h-screen bg-black opacity-80 fixed top-0 z-10"
        onClick={() => setScannedContent("")}
      ></div>
      <div className="z-20 fixed">
        <div className="w-[90vw] mx-[5vw] aspect-video bg-white rounded-xl flex justify-center items-center shadow-lg flex-col">
          <p className="font-bold text-xl mb-4">{title}</p>
          <p className="text-xs">スキャンされたユーザー名</p>
          <h1 className="text-3xl font-bold mb-4">{userName}</h1>
        </div>
        <div className="w-[90vw] h-12 mx-[5vw] grid grid-cols-4 mt-5 gap-2">
          <Link
            href={`/room?title=${encodeURIComponent(
              title
            )}?username=${encodeURIComponent(userName)}`} // クエリパラメータとして title を追加
            className="col-span-3 bg-custom_blue rounded-lg flex justify-center items-center text-white font-bold text-"
          >
            会話を開始する！
          </Link>
          <div
            className="col-span-1 bg-custom_red rounded-lg flex justify-center items-center text-white font-bold text-sm"
            onClick={() => setScannedContent("")}
          >
            キャンセル
          </div>
        </div>
      </div>
    </div>
  );
};
