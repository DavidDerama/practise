import { Auto } from "../shared/types";
import { FaCarOn } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";

type AutotBoxiProps = {
  autot: Auto[];
};

export const AutotBoxi = ({ autot }: AutotBoxiProps) => {
  const location = useLocation();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (autoId: { id: number }) =>
      fetch("http://localhost:3000/api/poista", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(autoId),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "autot" });
    },
  });

  function removeCar(autoId: number) {
    mutate({ id: autoId });
  }

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
        {location?.pathname !== "/haku" && (
          <button className="remove-car-btn" onClick={() => removeCar(auto.id)}>
            <FaTrash />
          </button>
        )}
      </div>
    );
  });
  return <div className="autot-boxi">{displayedAutot}</div>;
};
