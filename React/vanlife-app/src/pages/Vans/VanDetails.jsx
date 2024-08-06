import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetails() {
  const { state } = useLocation();

  const { id } = useParams();

  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, []);

  const backLink = state.prevLocation
    ? `${state.prevLocation.pathname + state.prevLocation.search}`
    : "../vans";

  return (
    van && (
      <main className="content van--detail">
        <Link to={backLink}>
          <p>←</p>
          <p>Back to all vans</p>
        </Link>
        <div className="product--content">
          <img src={van.imageUrl} alt="" />
          <div className="product-desc">
            <div className="product--name--type">
              <h2>{van.name}</h2>
              <span className={`product--type ${van.type}`}>Simple</span>
            </div>
            <h3>
              <span className="bold">${van.price}</span>/day
            </h3>
            <p>{van.description}</p>
            <button>Rent this van</button>
          </div>
        </div>
      </main>
    )
  );
}
