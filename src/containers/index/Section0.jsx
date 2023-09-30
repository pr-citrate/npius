import Background from '@components/common/Background';
import Title from '@components/common/Title';
import SubTitle from '@components/common/SubTitle';

export default function Section0() {
  const offset = 0;
  return (
    <>
      <Background offset={offset} factor={1} className='bg-sky-300' />
      <Title speed={offset + 0.7}>npius</Title>
      <SubTitle offset={offset + 0.1} speed={0.7}>
        north pacific international undersea station
      </SubTitle>
    </>
  );
}
