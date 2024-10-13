import { Auto } from "../shared/types";
import { FaCarOn } from "react-icons/fa6";

type AutotBoxiProps = {
  autot: Auto[];
};

export const AutotBoxi = ({ autot }: AutotBoxiProps) => {
  const displayedAutot = autot?.map((auto) => {
    return (
      <div className="auto-boxi">
        <div className="auto-logo">
          <FaCarOn />
        </div>
        <h3>
          {auto.malli}: {auto.merkki}
        </h3>
        <p>{auto.omistaja}</p>
        <p className="label">{auto.vuosimalli}</p>
      </div>
    );
  });
  return <div className="autot-boxi">{displayedAutot}</div>;
};
