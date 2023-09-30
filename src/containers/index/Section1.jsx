import Island from '@components/index/Island';
import Background from '@components/common/Background';

export default function Section1() {
  const offset = 1;
  return (
    <>
      <Background offset={offset} factor={0.4} className='bg-sky-300' />
      {/* factor must be 0.6 but set to 0.7 due to unknown 1px blank */}
      <Background offset={offset + 0.4} factor={0.7} className='bg-blue-400' />
      <Island
        offset={offset + 0.3}
        speed={1.1}
        width={1440}
        height={1024}
        layout={'fixed'}
      />
    </>
  );
}
