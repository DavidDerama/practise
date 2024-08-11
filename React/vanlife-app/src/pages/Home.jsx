import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home--main">
      <section className="content home">
        <h2>
          You got the travel plans! <br />
          We got the travel vans.
        </h2>
        <h3>Rent the perfect van for you</h3>
        <Link to="vans" className="home--action">
          Find the van for you
        </Link>
      </section>
    </main>
  );
}
