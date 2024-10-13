import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  console.log(query);
  return (
    <main>
      <div className="content">
        <h1>Test</h1>
      </div>
    </main>
  );
};
