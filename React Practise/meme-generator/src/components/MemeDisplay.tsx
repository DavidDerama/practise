export const MemeDisplay = ({
  imgSrc,
  topText,
  bottomText,
}: {
  imgSrc: string;
  topText: string;
  bottomText: string;
}) => {
  return (
    <div className="image-display">
      <h2 className="top-text">{topText}</h2>
      <img src={imgSrc} alt="" />
      <h2 className="bottom-text">{bottomText}</h2>
    </div>
  );
};
