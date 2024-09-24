type FormProps = {
  getNewImg: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  topText: string;
  bottomText: string;
};

export const Form = ({
  getNewImg,
  handleChange,
  topText,
  bottomText,
}: FormProps) => {
  return (
    <form onSubmit={getNewImg}>
      <div className="inputs-container">
        <div className="inputs">
          <label htmlFor="top-text">Top Text</label>
          <input
            type="text"
            name="topText"
            id="top-text"
            placeholder="Bro is"
            onChange={handleChange}
            value={topText}
          />
        </div>
        <div className="inputs">
          <label htmlFor="bottom-text">Bottom Text</label>
          <input
            type="text"
            name="bottomText"
            placeholder="kinda freaky"
            id="bottom-text"
            onChange={handleChange}
            value={bottomText}
          />
        </div>
      </div>
      <button>Get a new meme image</button>
    </form>
  );
};
