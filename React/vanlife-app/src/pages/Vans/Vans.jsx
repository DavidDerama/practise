import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import VanContainer from "../../components/VanContainer";

export default function Vans() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selected, setSelected] = useState(null);

  const filterByType = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prev) => {
      if (prev === null) {
        prev.remove(key);
      } else {
        prev.set(key, value);
        setSelected(value);
      }
      return prev;
    });
  }

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const displayedVans = filterByType
    ? vans.filter((item) => item.type === filterByType)
    : vans;

  const vansEl = displayedVans.map((item) => {
    return (
      <VanContainer
        name={item.name}
        price={item.price}
        description={item.description}
        type={item.type}
        imageUrl={item.imageUrl}
        id={item.id}
      />
    );
  });

  return (
    <main>
      <section className="content vans">
        <h1>Explore our van options</h1>
        <div className="filters">
          <button
            onClick={() => {
              handleFilterChange("type", "simple");
            }}
            className={filterByType === "simple" ? "selected" : "normal-filter"}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={filterByType === "luxury" ? "selected" : "normal-filter"}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={filterByType === "rugged" ? "selected" : "normal-filter"}
          >
            Rugged
          </button>
          {filterByType && <Link to=".">Clear filters</Link>}
        </div>
        <div className="filters"></div>
        <div className="vans--container">{vansEl}</div>
      </section>
    </main>
  );
}

// <div className="van--container">
//   <img src={vanImg} alt="" />
//   <div className="van--name--price">
//     <p className="bold">Modest Explorer</p>
//     <p>
//       <span className="bold price">$60</span>/day
//     </p>
//   </div>
//   <span className="van--type">Simple</span>
// </div>
