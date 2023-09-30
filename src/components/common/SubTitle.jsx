import Layer from '@/providers/Layer';

export default function SubTitle({ children, className, ...props }) {
  return (
    <Layer
      className={`flex items-center justify-center text-center ${className}`}
      {...props}
    >
      <h2 className='text-2xl capitalize'>{children}</h2>
    </Layer>
  );
}
