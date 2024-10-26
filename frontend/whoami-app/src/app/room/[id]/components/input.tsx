import { redirect } from "next/navigation";

type Props = {
  timeLeft: number;
};

export const Input = ({ timeLeft }: Props) => {
  const handleButtonClick = () => {
    redirect("/user-search/1");
  };

  return (
    <div
      className={`w-screen h-[40vh] rounded-t-xl font-bold fixed left-0 bg-white shadow-up duration-500 ease-in-out ${
        timeLeft > 0 ? "bottom-[-40vh]" : "bottom-0"
      }`}
    >
      <div className="px-[5vw] flex flex-col items-center">
        <p className="text-center text-sm my-3">
          お相手のプロフィールを入力しましょう！
        </p>
        <input
          type="text"
          name="title"
          placeholder="項目名"
          className="w-[80vw] h-[40px] text-sm shadow-inner rounded-xl px-2 bg-gray-100"
        />
        <input
          type="text"
          name="text"
          placeholder="内容"
          className="w-[80vw] min-h-[120px] text-sm mt-4 shadow-inner rounded-xl px-2 bg-gray-100"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-[60vw] h-[36px] mt-4 bg-custom_blue rounded-lg text-white shadow-sm"
        >
          登録
        </button>
      </div>
    </div>
  );
};
