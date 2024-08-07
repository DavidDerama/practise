import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import van from "../../assets/van.png";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setHostVans(data.vans);
          setIsLoading(false);
        }, 1);
      });
  }, []);

  const location = useLocation();

  const vansEl = hostVans.map((item) => {
    return (
      <Link className="van-link" to={item.id} state={{ location }}>
        <div className="van-container">
          <img src={item.imageUrl} alt="" />
          <div className="van-info">
            <h2 className="name">{item.name}</h2>
            <h2 className="price">${item.price}/day</h2>
          </div>
        </div>
      </Link>
    );
  });

  return !isLoading ? (
    <main className="host-vans">
      <h1>Your listed vans</h1>
      <div className="hosted-vans">{vansEl}</div>
    </main>
  ) : (
    <h1>Loading......</h1>
  );
}
