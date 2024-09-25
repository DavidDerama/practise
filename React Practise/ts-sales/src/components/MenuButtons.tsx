type MenuButtonsProps = {
  addStar: () => void;
  addFire: () => void;
  clearSales: () => void;
};

export const MenuButtons = ({
  addStar,
  addFire,
  clearSales,
}: MenuButtonsProps) => {
  return (
    <div className="menu-buttons">
      <button onClick={addStar}>⭐</button>
      <button onClick={addFire}>🔥</button>
      <button onClick={clearSales} className="clear-btn">
        Clear
      </button>
    </div>
  );
};
