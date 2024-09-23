import img from "../assets/troll.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={img} alt="" />
        <h1>Meme Generator</h1>
      </div>
      <h2>React Course - Project 3</h2>
    </header>
  );
};
