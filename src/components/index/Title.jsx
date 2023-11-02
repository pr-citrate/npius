export default function Title({ children, className }) {
  return (
    <h1 className={`text-center uppercase text-8xl ${className}`}>
      {children}
    </h1>
  );
}
