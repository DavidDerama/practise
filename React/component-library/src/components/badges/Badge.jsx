export default function Badge({ children, shape, background, className }) {
  console.log(className);

  return <div className={`badge ${shape} ${className}`}>{children}</div>;
}
