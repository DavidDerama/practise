import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [open, setOpen] = React.useState(initialValue);

  function toggle() {
    setOpen((prev) => !prev);
  }

  useEffectOnUpdate(onToggle, [open]);

  return [open, toggle];
}
