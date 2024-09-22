import { useState, useEffect } from "react";
import { Heading } from "./Heading";

type Person = {
  firstName: string;
  lastName: string;
  status: "single" | "taken";
};

type formData = {
  inputValue: string;
};

export const Person = ({ firstName, lastName, status }: Person) => {
  const [formData, setFormData] = useState<formData>({
    inputValue: "",
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(formData.inputValue);
  }

  function handleButtonCLick(e: React.MouseEvent) {
    console.log("TEst");
  }

  function logId(id: number) {
    alert(id);
  }

  const id = 1;

  return (
    <>
      <Heading textColor="blue">sas</Heading>
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <h2>You are a {status === "single" ? "loser" : "sigma"}</h2>
      <h2>You are a {status === "single" ? "loser" : "single"}</h2>
      <h3>{formData.inputValue}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="inputValue" />
        <button onClick={handleButtonCLick} type="button">
          Console
        </button>
        <button onClick={() => logId(id)} type="button">
          Log
        </button>
      </form>
    </>
  );
};
