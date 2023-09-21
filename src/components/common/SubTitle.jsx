import Layer from '@wrappers/Layer';

export default function SubTitle({ children, className, ...props }) {
  return (
    <Layer
      {...props}
      className={`${className} flex items-center justify-center text-center`}
    >
      <h2 className='text-2xl capitalize'>{children}</h2>
    </Layer>
  );
}
