export const Title = ({ title }: { title: string }) => {
  return (
    <div className="my-5">
      <div className="lg:w-[90vw] mx-[5vw] sm:w-[390px] font-bold">{title}</div>
    </div>
  );
};
