type FormProps = {
  getNewImg: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Form = ({ getNewImg, handleChange }: FormProps) => {
  return (
    <form>
      <div className="inputs-container">
        <div className="inputs">
          <label htmlFor="top-text">Top Text</label>
          <input
            type="text"
            name="topText"
            id="top-text"
            placeholder="Bro is"
            onChange={handleChange}
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
          />
        </div>
      </div>
      <button onClick={getNewImg} type="button">
        Get a new meme image
      </button>
    </form>
  );
};
