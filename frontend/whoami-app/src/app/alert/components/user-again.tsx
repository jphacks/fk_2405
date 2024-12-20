export const UserAgain = ({ username }: { username: string }) => {
  return (
    <div className="w-[90vw] mx-[5vw] h-16 bg-white flex items-center justify-between font-bold">
      <div className="flex items-center">
        <h1 className="text-xl my-4">No.22</h1>
        <h1 className="text-xl my-4 ml-4">{username}</h1>
      </div>
      <div className="px-2 py-1 bg-custom_blue text-white rounded-lg">
        <h1>連絡先交換</h1>
      </div>
    </div>
  );
};
