import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home--main">
      <section className="content home">
        <h2>
          You got the travel plans <br />
          We got the travel vans.
        </h2>
        <p>Rend the perfect van for you</p>
        <Link to="vans" className="home--action">
          Find your van
        </Link>
      </section>
    </main>
  );
}
