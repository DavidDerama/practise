import { useEffect, useState } from "react";
import star from "../../assets/star.png";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const [hostedVans, setHostedVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setHostedVans(data.vans);
          setIsLoading(false);
        }, 1);
      });
  }, []);

  const location = useLocation();

  const vansEl = hostedVans.map((item) => {
    return (
      <Link className="van-link" to={`vans/${item.id}`} state={{ location }}>
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

  return (
    <main className="dashboard">
      <section className="summary">
        <div className="info">
          <h2>Welcome!</h2>
          <p>Income last 30 days</p>
          <h2>$2,260</h2>
        </div>
        <div className="details">
          <button>Details</button>
        </div>
      </section>
      <section className="review-score">
        <div className="left">
          <h2>Review score</h2>
          <div className="img-text">
            <img src={star} alt="" />
            <h2>
              5.0/<span className="normal">5</span>
            </h2>
          </div>
        </div>
        <div className="details">
          <button>Details</button>
        </div>
      </section>
      <section className="listed-vans">
        <div className="listed-vans-header">
          <h1>Your listed vans</h1>
          <Link to="vans">View all</Link>
        </div>
        <div className="listed-vans-container">
          {!isLoading ? vansEl : <h1>Loading...</h1>}
        </div>
      </section>
    </main>
  );
}
