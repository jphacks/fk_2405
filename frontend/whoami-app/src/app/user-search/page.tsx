"use client";

import { useSearchParams } from "next/navigation"; // useSearchParams をインポート
import { useEffect, useState } from "react";
import { Title } from "@/components/ui/title";
import { UserCard } from "@/app/user-search/components/userCard";
import { ScanNfc } from "@/app/user-search/components/scanNfc";
import { supabase } from "@/lib/supabase"; // Supabase クライアントをインポート

export default function Home() {
  const searchParams = useSearchParams(); // クエリパラメータを取得
  const userId = searchParams.get("user_id"); // user_id を取得
  const [participants, setParticipants] = useState([]); // 参加者の状態を管理

  // データを取得する関数
  const fetchParticipants = async () => {
    if (!userId) return; // user_id がない場合は早期リターン

    const { data, error } = await supabase
      .from("Venue")
      .select("*")
      .eq("user_id", userId); // user_id が一致するレコードを取得

    if (error) {
      console.error("Error fetching participants:", error);
    } else {
      setParticipants(data); // 取得したデータを状態に設定
    }
  };

  useEffect(() => {
    fetchParticipants(); // コンポーネントがマウントされたときにデータを取得
  }, [userId]); // userId が変更されたときに再取得

  return (
    <div className="mt-20 pb-[20vh]">
      <UserCard />
      <ScanNfc />
      {/* <Title title={"参加者一覧"} />
      <div>
        {participants.length > 0 ? (
          participants.map((participant, index) => (
            <div key={index} className="py-2">
              {participant.participant.userId}
            </div>
          ))
        ) : (
          <div>参加者が見つかりませんでした。</div>
        )}
      </div> */}
    </div>
  );
}
