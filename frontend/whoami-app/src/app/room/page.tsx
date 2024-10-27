"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Title } from "@/components/ui/title";
import { Content } from "./components/content";
import { Input } from "./components/input";
import { supabase } from "@/lib/supabase"; // Supabaseクライアントをインポート

export default function Room() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [userItems, setUserItems] = useState({}); // ユーザーのアイテムを管理するステート（オブジェクト）
  const searchParams = useSearchParams();
  const username = decodeURIComponent(searchParams.get("username") || "");
  const id = 2345; // ここに取得したいユーザーのIDを設定

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // ユーザーのアイテムを取得する関数
  const fetchUserItems = async (userId) => {
    const { data, error } = await supabase
      .from("User") // Userテーブルからデータを取得
      .select("items") // itemsを取得
      .eq("id", userId); // idが一致するものを取得

    if (error) {
      console.error("Error fetching user items:", error);
    } else if (data && data.length > 0) {
      setUserItems(data[0].items); // 取得したitemsをステートに設定
    }
  };

  // コンポーネントがマウントされたときにアイテムを取得
  useEffect(() => {
    fetchUserItems(id);
  }, [id]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="w-screen h-screen fixed top-0 z-20 bg-custom_yellow flex flex-col items-center">
      <div className="">
        <Input timeLeft={timeLeft} />
      </div>
      {timeLeft === 0 && <Input timeLeft={timeLeft} />}
      <div className="text-center font-bold mt-5">
        <h1 className="text-3xl mt-1 mb-4">{username || "東迎けんたろう"}</h1>
      </div>
      {timeLeft > 0 && (
        <div className="w-[90vw] mx-[5vw] my-6 py-5 text-center text-white font-bold bg-custom_blue rounded-lg shadow-xl">
          <p className="text-sm">残り時間</p>
          <h1 className="text-6xl mt-2">{formatTime(timeLeft)}</h1>
        </div>
      )}
      <Title title={"お相手の情報"} />
      <div className="w-[90vw] mx-[5vw] min-h-[40vh] mb-[40vh] bg-white rounded-lg">
        {/* ユーザーのアイテムを表示 */}
        <div className="p-4">
          <h2 className="text-xl font-bold">ユーザーの情報:</h2>
          <ul>
            {Object.entries(userItems).length > 0 ? (
              Object.entries(userItems).map(([key, value]) => (
                <li key={key} className="py-1">
                  <strong>{key}:</strong> {value}
                </li>
              ))
            ) : (
              <li>アイテムが見つかりませんでした。</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
