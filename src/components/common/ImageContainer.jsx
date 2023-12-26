export default function ImageContainer({ className, children, ...props }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
}
