import { useGetForm } from "hooks/query/useGetForm";
import type React from "react";

const Home: React.FC = () => {
  const { data } = useGetForm();

  return (
    <div>
      <p>Home</p>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Home;
