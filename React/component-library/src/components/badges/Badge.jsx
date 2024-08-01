export default function Badge({ children, shape, background, className }) {
  return <div className={`badge ${shape} ${className}`}>{children}</div>;
}
