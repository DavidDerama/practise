export default function TestimonialQuote({ children }) {
  return (
    <div className="quote">
      <img src="quote-icon.png" alt="" />
      <p>{children}</p>
    </div>
  );
}
