export const UserCard = ({ title }: { title: string }) => {
  return (
    <div className="w-[90vw] mx-[5vw] aspect-video bg-custom_orange rounded-xl flex justify-center items-center font-bold shadow-lg text-white  flex-col">
      <p className="text-xl mb-4">Event Name</p>
      <h1 className="text-3xl mb-4">{title}</h1>
      <div className="flex gap-2 text-sm">
        <p>ポイント： 12pt</p>
        <p>会話数： 9人</p>
      </div>
    </div>
  );
};
