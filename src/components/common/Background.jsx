import Layer from '@providers/Layer';

export default function Background({ children, className, ...props }) {
  return (
    <Layer className={`-z-10 h-screen ${className}`} {...props}>
      {children}
    </Layer>
  );
}
