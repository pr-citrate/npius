import Layer from '@providers/Layer';

export default function Station1({ ...props }) {
  return (
    <>
      <Layer className='flex items-center justify-center' {...props}>
        <div className='bg-white rounded-lg w-36 h-36'>station 1</div>
      </Layer>
    </>
  );
}
