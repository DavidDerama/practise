export default function Main() {
  return (
    <main>
      <h2>David Derama</h2>
      <p>Full Stack Developer</p>
      <a
        href="https://davidderama-portfolio.netlify.app/"
        className="label website"
      >
        Website
      </a>
      <ul className="links">
        <li className="email">
          <a href="">
            <i class="fa-solid fa-envelope"></i>Email
          </a>
        </li>
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/david-derama-0608742ab/">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </a>
        </li>
      </ul>
      <div className="desc">
        <div className="desc-first">
          <p className="label desc-header">About</p>
          <p>
            I am a computer science student in Business College Helsinki. My
            favourite languages are Javascript and Python.
          </p>
        </div>
        <div className="desc-second">
          <p className="label desc-header">Interests</p>
          <p>Building Web Apps. Music. Movies. Gym</p>
        </div>
      </div>
    </main>
  );
}
