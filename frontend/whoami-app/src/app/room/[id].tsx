type Props = {
  userName: string;
  userId: number;
};

export const Room = ({ userName, userId }: Props) => {
  return (
    <div className="">
      <div>
        <p>No.{userId}</p>
        <h1>{userName}</h1>
      </div>
    </div>
  );
};
