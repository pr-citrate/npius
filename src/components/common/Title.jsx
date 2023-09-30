import Layer from '@/providers/Layer';

export default function Title({ children, className, ...props }) {
  return (
    <Layer
      className={`flex items-center justify-center text-center ${className}`}
      {...props}
    >
      <h1 className='uppercase text-8xl'>{children}</h1>
    </Layer>
  );
}
