export default function SubTitle({ children, className }) {
  return (
    <h2 className={`text-center capitalize text-2xl ${className}`}>
      {children}
    </h2>
  );
}
