import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { price } = useOutletContext();
  return (
    <div>
      <h2>
        ${price}.00/<span className="normal">day</span>
      </h2>
    </div>
  );
}
