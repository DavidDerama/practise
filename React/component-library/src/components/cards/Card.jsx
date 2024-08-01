export default function Card({ children }) {
  return (
    <div className="card">
      <img src="card-icon.png" alt="" />
      {children}
    </div>
  );
}
