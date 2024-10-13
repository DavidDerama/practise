import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const [haku, setHaku] = useState("");

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setHaku(value);
  }

  function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/haku");
    console.log(haku);
  }

  return (
    <form className="search-form" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={haku}
      />
      <button>Search</button>
    </form>
  );
};
