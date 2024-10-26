type Props = {
  title: string;
  text: string;
};

export const Content = ({ title, text }: Props) => {
  return (
    <div className="w-[90%] mx-[5%] my-4 font-bold">
      <p className="text-sm text-gray-700 text-left">{title}</p>
      <h1 className="text-lg mb-4 text-center">{text}</h1>
    </div>
  );
};
