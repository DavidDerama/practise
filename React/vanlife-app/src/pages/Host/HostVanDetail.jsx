import { useEffect, useState } from "react";
import {
  useParams,
  Link,
  useLocation,
  NavLink,
  Outlet,
} from "react-router-dom";

export default function HostVanDetail() {
  const [hostVan, setHostVan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const location = useLocation();

  const locationLink = location.state?.location.pathname || "../vans";

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setHostVan(data.vans);
          setIsLoading(false);
        }, 1);
      });
  }, []);

  const style = {
    fontWeight: "800",
    textDecoration: "underline",
  };

  return (
    <main className="host-van-details">
      <Link to={locationLink}>
        <p>←</p>
        Back to all vans
      </Link>

      {!isLoading ? (
        <div className="host-van-detail-page">
          <div className="van-header-container">
            <img src={hostVan.imageUrl} alt="" />
          </div>
          <div className="van-header-right">
            <div className="van-header-info">
              <span className={`van-header-type ${hostVan.type}`}>
                {hostVan.type}
              </span>
              <h2>{hostVan.name}</h2>
              <h2>
                ${hostVan.price}
                <span className="normal">/day</span>
              </h2>
            </div>
            <nav>
              <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? style : null)}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? style : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? style : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={hostVan} />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}
