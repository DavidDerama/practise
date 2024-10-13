import { useQuery } from "react-query";
import { AutotBoxi } from "../components/AutotBoxi";

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["autot"],
    queryFn: () =>
      fetch("http://localhost:3000/api/autot", {
        mode: "cors",
      }).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  return (
    <main>
      <div className="content">
        <h1>Autot</h1>
        <AutotBoxi autot={data} />
      </div>
    </main>
  );
};
