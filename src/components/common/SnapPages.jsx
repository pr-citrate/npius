export default function SnapPages({ children, className, ...props }) {
  return (
    <main
      className={`${className} h-screen overflow-y-scroll snap-mandatory snap-y`}
      {...props}
    >
      {children}
    </main>
  );
}
