import { Title } from "@/components/ui/title";
import { UserCard } from "@/components/ui/userCard";
import { ScanNfc } from "@/components/ui/scanNfc";

export default function Home() {
  return (
    <div className="mt-20 pb-[20vh]">
      <UserCard title={"北原將雄"} />
      <ScanNfc />
      <Title title={"参加者一覧"} />
    </div>
  );
}
