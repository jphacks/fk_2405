"use client";

import { useState, useEffect } from "react";
import { Title } from "@/components/ui/title";
import { Content } from "./components/content";
import { Input } from "./components/input";

export default function Room() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

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
      {timeLeft == 0 && <Input timeLeft={timeLeft} />}
      <div className="text-center font-bold mt-5">
        <p className="text-lg">No.XX</p>
        <h1 className="text-3xl mt-1">北原將雄</h1>
      </div>
      {timeLeft > 0 && (
        <div className="w-[90vw] mx-[5vw] my-6 py-5 text-center text-white font-bold bg-custom_blue rounded-lg shadow-xl">
          <p className="text-sm">残り時間</p>
          <h1 className="text-6xl mt-2">{formatTime(timeLeft)}</h1>
        </div>
      )}
      <Title title={"お相手の情報"} />
      <div className="w-[90vw] mx-[5vw] min-h-[40vh] mb-[40vh] bg-white rounded-lg">
        <Content title={"出身地"} text={"福岡県　北九州市"} />
        <Content title={"出身地"} text={"福岡県　北九州市"} />
        <Content title={"出身地"} text={"福岡県　北九州市"} />
      </div>
    </div>
  );
}
