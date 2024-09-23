import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { MemeDisplay } from "./components/MemeDisplay";
import { useEffect, useState } from "react";
import "./App.css";

type Meme = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  captions: number;
};

export const App = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = useState("");
  const [memeText, setMemeText] = useState({
    topText: "",
    bottomText: "",
  });
  useEffect(() => {
    async function fetchMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      if (data.success) {
        setMemes(data.data.memes);
        setCurrentMeme(data.data.memes[0].url);
      }
    }

    fetchMemes();
  }, []);

  function getNewImg() {
    const randomNum = Math.ceil(Math.random() * memes?.length);
    setCurrentMeme(memes[randomNum].url);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setMemeText((prev) => ({ ...prev, [name]: value }));
    console.log(value, name);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <div className="main-content">
          <Form getNewImg={getNewImg} handleChange={handleChange} />
          <MemeDisplay
            imgSrc={currentMeme}
            topText={memeText.topText}
            bottomText={memeText.bottomText}
          />
        </div>
      </main>
      <footer>
        <p>Copyright &copy; David Derama</p>
      </footer>
    </div>
  );
};
