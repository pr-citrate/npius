import Layer from '@wrappers/Layer';

export default function Heading({ children, className, ...props }) {
  return (
    <Layer {...props} className={`${className} p-24`}>
      <h3 className='uppercase text-4xl'>{children}</h3>
    </Layer>
  );
}
