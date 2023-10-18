export default function SnapPage({ className, children, ...props }) {
  return (
    <section
      className={`${className} h-screen snap-start snap-always`}
      {...props}
    >
      SNAPPAGE
      {children}
    </section>
  );
}
