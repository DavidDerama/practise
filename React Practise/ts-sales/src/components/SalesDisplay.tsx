type SalesDisplayProps = { salesArr: string[] };

export const SalesDisplay = ({ salesArr }: SalesDisplayProps) => {
  const displayedSales = salesArr.map((sale) => {
    if (sale === "star") {
      return <li>⭐</li>;
    } else if (sale === "fire") {
      return <li>🔥</li>;
    }
  });
  return (
    <div className="stats-display">
      <h2>Live Sales - {salesArr.length}</h2>
      <ul className="stats-container">{displayedSales}</ul>
    </div>
  );
};
