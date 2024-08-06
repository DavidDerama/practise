import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function VanContainer(props) {
  const location = useLocation();

  return (
    <Link
      to={`${props.id}`}
      state={{ props, prevLocation: location }}
      className="van--container"
    >
      <div className="van--content">
        <div className="van--image">
          <img src={props.imageUrl} alt="" />
        </div>
        <div className="van--desc">
          <div className="van--name--type">
            <p className="bold">{props.name}</p>
            <span className={`van--type ${props.type}`}>{props.type}</span>
          </div>
          <p>
            <span className="bold price">${props.price}</span>/day
          </p>
        </div>
      </div>
    </Link>
  );
}
