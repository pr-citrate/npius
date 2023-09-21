import Layer from '@wrappers/Layer';

export default function Background({ children, className, ...props }) {
  return (
    <Layer className={`${className} -z-10`} {...props}>
      {children}
    </Layer>
  );
}
