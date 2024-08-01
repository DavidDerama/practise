import { useRef, useEffect } from "react";

export default function useEffectOnUpdate(effectFunc, deps) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender) {
      firstRender = !firstRender;
    } else {
      effectFunc();
    }
  }, deps);
}
