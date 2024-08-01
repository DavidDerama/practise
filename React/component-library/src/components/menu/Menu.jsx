import React from "react";
import useToggle from "../../hooks/useToggle";

const MenuContext = React.createContext();

export default function Menu({ children, onOpen }) {
  const [open, toggle] = useToggle(true, onOpen);

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
