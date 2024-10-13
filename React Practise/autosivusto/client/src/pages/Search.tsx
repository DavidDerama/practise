import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AutotBoxi } from "../components/AutotBoxi";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data } = useQuery({
    queryKey: ["hakutulos", query],
    queryFn: () =>
      fetch(`http://localhost:3000/api/haku?q=${query}`, { mode: "cors" }).then(
        (res) => res.json()
      ),
  });

  return (
    <main>
      <div className="content">
        <h1>Results:</h1>
        <AutotBoxi autot={data} />
      </div>
    </main>
  );
};
