import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import data from "./data.js";
import "./App.css";

export default function App() {
  const sections = data.map((section) => {
    return <Section item={section} />;
  });
  return (
    <>
      <Header />
      <main>{sections}</main>
    </>
  );
}
