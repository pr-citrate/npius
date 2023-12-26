export default function Title({ children, className }) {
  return (
    <h1 className={`text-center uppercase sm:text-8xl text-7xl ${className}`}>
      {children}
    </h1>
  );
}
