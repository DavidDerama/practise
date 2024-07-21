export default function Meme(props) {
  const { topText, bottomText, randomImgUrl } = props.item;
  console.log(topText);
  return (
    <section className="meme">
      <img src={randomImgUrl} alt="" />
      <h3 className="top-text">{topText}</h3>
      <h3 className="bottom-text">{bottomText}</h3>
    </section>
  );
}
