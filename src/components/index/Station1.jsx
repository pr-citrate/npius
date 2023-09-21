import Layer from '@/wrappers/Layer';

export default function Station1({ ...props }) {
  return (
    <>
      <Layer className='flex justify-center items-center' {...props}>
        <div className='bg-white rounded-lg w-36 h-36' />
      </Layer>
    </>
  );
}
