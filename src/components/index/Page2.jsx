import Layer from '@wrappers/Layer';
import Background from '@components/common/Background';
import Heading from '@components/common/Heading';
import Station1 from './Station1';

export default function Page2() {
  return (
    <>
      <Background
        offset={2}
        className='bg-gradient-to-b from-blue-400 via blue-500 to-blue-500'
      />
      <Heading offset={2}>st 1</Heading>
      <Station1 offset={2} speed={2} />
    </>
  );
}
