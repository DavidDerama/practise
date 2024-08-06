import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetails() {
  // const info = useLocation();
  // console.log(info);

  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, [id]);

  console.log(van);

  return (
    <main className="content van--detail">
      <Link to="..">Back to all vans</Link>
      <h1>dsaasdasd</h1>
    </main>
  );
}
