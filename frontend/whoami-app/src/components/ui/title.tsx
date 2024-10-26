export const Title = ({ title }: { title: string }) => {
  return (
    <div className="my-2 text-left">
      <div className="w-[90vw] mx-[5vw] sm:w-[390px] font-bold">{title}</div>
    </div>
  );
};
