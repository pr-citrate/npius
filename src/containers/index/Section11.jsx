import Background from '@components/common/Background';
import Heading from '@components/common/Heading';
import Station5 from '@components/index/Station5';

export default function Section11() {
  const offset = 11;
  return (
    <>
      <Background offset={offset} className='bg-slate-950' />
      <Heading offset={offset}>station 5</Heading>
      <Station5 offset={offset} speed={2} />
    </>
  );
}
