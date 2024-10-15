import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { toast } from "react-toastify";

export const SearchForm = () => {
  const [haku, setHaku] = useState("");

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setHaku(value);
  }

  function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (haku.length) {
      navigate(`/haku?q=${haku}`);
    } else {
      toast.info("Search input is required", {
        closeButton: false,
      });
    }
  }

  return (
    <form className="search-form" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={haku}
      />
      <button>
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};
