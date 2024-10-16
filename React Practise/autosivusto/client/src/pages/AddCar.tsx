import React, { useState } from "react";
import { FormData, Auto, OutletContextType } from "../shared/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useOutletContext, useNavigate } from "react-router-dom";

export const AddCar = () => {
  const [formData, setFormData] = useState<FormData>({
    merkki: "",
    malli: "",
    vuosimalli: 0,
    omistaja: "",
  });

  const { notify } = useOutletContext<OutletContextType>();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newCar: Auto) =>
      fetch("http://localhost:3000/api/lisaa", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(newCar),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      notify(data.message, "success");
      queryClient.invalidateQueries({ queryKey: "autot" });
    },
  });

  const { data: carId } = useQuery({
    queryKey: ["carId"],
    queryFn: () =>
      fetch("http://localhost:3000/api/maara", {
        mode: "cors",
      }).then((res) => res.json()),
  });

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate({ id: parseInt(carId.length), ...formData });
    navigate("..");
  }

  return (
    <main>
      <div className="content">
        <h1>Add a car</h1>
        <form className="lisaa-form" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="merkki">Merkki:</label>
            <input
              type="text"
              name="merkki"
              value={formData.merkki}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="malli">Malli:</label>
            <input
              type="text"
              name="malli"
              value={formData.malli}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="vuosimalli">Vuosimalli:</label>
            <input
              type="number"
              name="vuosimalli"
              value={formData.vuosimalli}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="omistaja">Omistaja:</label>
            <input
              type="text"
              name="omistaja"
              value={formData.omistaja}
              onChange={handleFormChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    </main>
  );
};
