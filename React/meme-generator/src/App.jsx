import { useState, useEffect } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    randomImgUrl: "memeimg.png",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const order = Math.floor(Math.random() * allMemes.length);
    const imgUrl = allMemes[order].url;

    setFormData((prev) => {
      toast.success("Meme Changed", {
        closeButton: false,
      });

      return {
        ...prev,
        randomImgUrl: imgUrl,
      };
    });
  }

  return (
    <div className="app">
      <ToastContainer
        autoClose="1000"
        position="bottom-right"
        hideProgressBar="true"
        limit={6}
        style={{
          width: "fit-content",
          fontSize: "14px",
        }}
      />
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="topText"
            value={formData.topText}
            onChange={handleChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            value={formData.bottomText}
            onChange={handleChange}
            placeholder="Bottom Text"
          />
          <button>Get a new meme image 🖼️</button>
        </form>
        <Meme item={formData} />
      </main>
    </div>
  );
}
