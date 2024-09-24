type MenuButtonsProps = {
  addStar: () => void;
  addFire: () => void;
};

export const MenuButtons = ({ addStar, addFire }: MenuButtonsProps) => {
  return (
    <div className="menu-buttons">
      <button onClick={addStar}>⭐</button>
      <button onClick={addFire}>🔥</button>
    </div>
  );
};
