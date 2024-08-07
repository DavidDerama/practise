import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { imageUrl } = useOutletContext();

  return (
    <div className="van-images">
      <img src={imageUrl} />
      <img src={imageUrl} />
      <img src={imageUrl} />
    </div>
  );
}
