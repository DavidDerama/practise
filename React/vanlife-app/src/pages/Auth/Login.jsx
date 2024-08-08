import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState("idle");

  const prevLocation = useLocation();

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, type, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const prevLocationLink = `../${prevLocation.state?.pathname}` || "../host";

  function handelSubmit(event) {
    event.preventDefault();
    setIsLoading("loading");
    setTimeout(() => {
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
            event.target.reset();
          } else if (data.user) {
            localStorage.setItem("isLoggedIn", true);
            navigate(prevLocationLink, { replace: true });
          }
        })
        .finally(() => {
          setIsLoading("idle");
        });
    }, 500);
  }

  return (
    <main className="login">
      <div className="content login-page">
        <h2>Sign in to your account</h2>
        <h4>Sign in to your account (b@b.com, p123)</h4>
        {error && <h3 className="error">{error}</h3>}
        <form onSubmit={handelSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            handleChange="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>
            {isLoading === "idle" && "Sign In"}
            {isLoading === "loading" && "Loading..."}
          </button>
        </form>
      </div>
    </main>
  );
}
