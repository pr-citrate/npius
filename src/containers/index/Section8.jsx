import Background from '@components/common/Background';
import Heading from '@components/common/Heading';
import Station4 from '@components/index/Station4';

export default function Section8() {
  const offset = 8;
  return (
    <>
      <Background offset={offset} className='bg-slate-950' />
      <Heading offset={offset}>station 4</Heading>
      <Station4 offset={offset} speed={2} />
    </>
  );
}
