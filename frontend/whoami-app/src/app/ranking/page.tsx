import { Title } from "@/components/ui/title";
import { TopUser } from "./components/top-user";
import { OtherUser } from "./components/other-users";

export default function Ranking() {
  return (
    <div className="mt-20 pb-[20vh]">
      <Title title={"ランキング"} />
      <TopUser username={"北原"} />
      <OtherUser username={"北原"} />
    </div>
  );
}
