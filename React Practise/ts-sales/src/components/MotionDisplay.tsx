type MotionDisplayProps = {
  revenue: number;
  commission: number;
};

export const MotionDisplay = ({ revenue, commission }: MotionDisplayProps) => {
  return (
    <div className="motion-container">
      <div className="motion-item">
        <h2>Total Revenue</h2>
        <div className="motion-item-display">
          <h3>€{revenue}</h3>
        </div>
      </div>
      <div className="motion-item">
        <h2>Total Commission</h2>
        <div className="motion-item-display">
          <h3>€{commission}</h3>
        </div>
      </div>
    </div>
  );
};
