type Props = {
  username: string;
};

export const OtherUser = ({ username }: Props) => {
  return (
    <div className="mt-5">
      <div className="w-[90vw] mx-[5vw] mt-1 h-12 flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-lg my-4">No.4</h1>
          <h1 className="text-lg my-4 ml-4">{username}</h1>
        </div>
      </div>

      <div className="w-[90vw] mx-[5vw] mt-1 h-12 flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-lg my-4">No.5</h1>
          <h1 className="text-lg my-4 ml-4">{username}</h1>
        </div>
      </div>

      <div className="w-[90vw] mx-[5vw] mt-1 h-12 flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-lg my-4">No.6</h1>
          <h1 className="text-lg my-4 ml-4">{username}</h1>
        </div>
      </div>
    </div>
  );
};
