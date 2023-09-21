export default function SnapPage({ className, children, ...props }) {
  return (
    <div
      className={`${className} w-screen h-screen snap-center snap-always overflow-hidden relative grid place-content-center`}
      {...props}
    >
      {children}
    </div>
  );
}
