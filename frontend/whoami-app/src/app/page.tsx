import Link from "next/link";

import { Title } from "@/components/ui/title";
const sampleEvent = [
  {
    user_id: "01E456789ABCDEF123456789",
    place: "Conference Hall A",
    password: "securepass123",
    start_time: "2024-10-26T09:00:00",
    end_time: "2024-10-26T17:00:00",
    talk_time_limit: 15,
    created_at: "2024-10-25T00:00:00",
    updated_at: "2024-10-25T00:00:00",
    title: "",
  },
  {
    user_id: "01E456789ABCDEF123456788",
    place: "Meeting Room B",
    password: "pass456",
    start_time: "2024-10-27T10:00:00",
    end_time: "2024-10-27T15:00:00",
    talk_time_limit: 20,
    created_at: "2024-10-26T00:00:00",
    updated_at: "2024-10-26T00:00:00",
  },
  {
    user_id: "01E456789ABCDEF123456787",
    place: "Auditorium C",
    password: "password789",
    start_time: "2024-10-28T08:30:00",
    end_time: "2024-10-28T12:30:00",
    talk_time_limit: 10,
    created_at: "2024-10-26T00:00:00",
    updated_at: "2024-10-26T00:00:00",
  },
  {
    user_id: "01E456789ABCDEF123456786",
    place: "Lecture Hall D",
    password: "letmein321",
    start_time: "2024-10-29T13:00:00",
    end_time: "2024-10-29T18:00:00",
    talk_time_limit: 25,
    created_at: "2024-10-27T00:00:00",
    updated_at: "2024-10-27T00:00:00",
  },
  {
    user_id: "01E456789ABCDEF123456785",
    place: "Workshop Room E",
    password: "mypassword",
    start_time: "2024-10-30T09:00:00",
    end_time: "2024-10-30T17:00:00",
    talk_time_limit: 30,
    created_at: "2024-10-28T00:00:00",
    updated_at: "2024-10-28T00:00:00",
  },
];

export default function Home() {
  return (
    <div className="mt-20 pb-[20vh]">
      <Title title={"参加するイベントを選択する"} />

      {sampleEvent.map((event, index) => (
        <div
          key={index}
          className="w-[90vw] mx-[5vw] py-10 bg-custom_yellow px-2 mb-5 rounded-md shadow-lg text-center justify-center items-center flex flex-col"
        >
          <Link href={"/user-search/1"} className="w-[90vw] mx-[5vw]">
            <h1 className="font-bold text-2xl">JPHACK in FUKUOKA</h1>
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
