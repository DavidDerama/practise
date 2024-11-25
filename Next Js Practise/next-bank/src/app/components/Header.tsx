import Image from "next/image";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="flex justify-center items-center py-8">
      <section className="flex gap-4 items-center text-4xl font-extrabold">
        <Image src={logo} alt="logo" height={30} />
        <h1>BestBank</h1>
      </section>
    </header>
  );
};

export default Header;
