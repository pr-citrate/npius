import Layer from '@wrappers/Layer';

export default function Title({ children, className, ...props }) {
  return (
    <Layer
      {...props}
      className={`${className} flex items-center justify-center text-center`}
    >
      <h1 className='uppercase text-8xl'>{children}</h1>
    </Layer>
  );
}
