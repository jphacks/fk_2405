"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Title } from "@/components/ui/title";
import { supabase } from "@/lib/supabase"; // Supabase クライアントをインポート

export default function Home() {
  const [venues, setVenues] = useState([]);

  // データを取得する関数
  const fetchVenues = async () => {
    const { data, error } = await supabase
      .from("Venue") // 'Venue' テーブルからデータを取得
      .select("*");

    if (error) {
      console.error("Error fetching venues:", error);
    } else {
      setVenues(data);
    }
  };

  useEffect(() => {
    fetchVenues(); // コンポーネントがマウントされたときにデータを取得
  }, []);

  return (
    <div className="mt-20 pb-[20vh]">
      <Title title={"参加するイベントを選択する"} />

      {venues.map((event, index) => (
        <div
          key={index}
          className="w-[90vw] mx-[5vw] py-10 bg-custom_yellow px-2 mb-5 rounded-md shadow-lg text-center justify-center items-center flex flex-col"
        >
          <Link
            href={{
              pathname: "/user-search",
              query: { title: event.title, user_id: event.user_id }, // user_idを追加
            }}
            className="w-[90vw] mx-[5vw]"
          >
            <h1 className="font-bold text-2xl">{event.title}</h1>
            <p className="font-bold text-sm">{event.place}</p>
            <p className="font-bold text-sm">
              開始時間: {new Date(event.start_time).toLocaleString()}
            </p>
            <p className="font-bold text-sm">
              終了時間: {new Date(event.end_time).toLocaleString()}
            </p>
            <p className="text-sm">
              トークタイムリミット: {event.talk_time_limit} 分
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
