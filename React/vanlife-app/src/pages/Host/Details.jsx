import { useOutletContext } from "react-router-dom";

export default function Details() {
  const { name, description, type } = useOutletContext();

  return (
    <div className="details-nested">
      <p>
        <span className="bold">Name: </span>
        {name}
      </p>
      <p>
        <span className="bold">Category: </span>
        {type}
      </p>
      <p>
        <span className="bold">Description: </span>
        {description}
      </p>
    </div>
  );
}
