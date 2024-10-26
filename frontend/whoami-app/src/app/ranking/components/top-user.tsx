type Props = {
  username: string;
};

export const TopUser = ({ username }: Props) => {
  return (
    <div>
      <div className="w-[90vw] mx-[5vw] mt-4 shadow-md h-16 bg-[#FFCA39] flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-xl my-4">No.1</h1>
          <h1 className="text-xl my-4 ml-4">{username}</h1>
        </div>
      </div>
      <div className="w-[90vw] mx-[5vw] mt-4 shadow-md h-16 bg-[#cbcbcb] flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-xl my-4">No.2</h1>
          <h1 className="text-xl my-4 ml-4">{username}</h1>
        </div>
      </div>
      <div className="w-[90vw] mx-[5vw] mt-4 shadow-md h-16 bg-[#F4944F] flex items-center justify-between font-bold rounded-xl">
        <div className="flex items-center px-4">
          <h1 className="text-xl my-4">No.3</h1>
          <h1 className="text-xl my-4 ml-4">{username}</h1>
        </div>
      </div>
    </div>
  );
};
