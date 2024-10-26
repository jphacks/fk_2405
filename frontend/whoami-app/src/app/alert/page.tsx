import { Title } from "@/components/ui/title";
import { UserAgain } from "./components/user-again";
import { UserView } from "./components/user-view";

export default function Alert() {
  return (
    <div className="mt-20 pb-[20vh]">
      <div className="pb-20 mb-5 border-b-2">
        <Title title={"お話しに行こう！"} />
        <UserAgain username={"username"} />
      </div>

      <div className="pb-20 mb-5">
        <Title title={"あなたとまた話したい！"} />
        <UserView username={"username"} />
      </div>
    </div>
  );
}
