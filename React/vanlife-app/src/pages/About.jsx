import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <section className="content about">
        <div className="about--hero"></div>
        <div className="about-container">
          <div className="about--desc">
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <ul>
              <li>
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉)
              </li>
              <li>
                {" "}
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </li>
            </ul>

            <div className="highlight--box">
              <h3>Your destination is waiting. Your van is ready.</h3>
              <Link to="../vans">Explore our vans</Link>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1676122796020-19c6df3a78b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
