import Background from '@components/common/Background';
import Title from '@components/common/Title';
import SubTitle from '@components/common/SubTitle';

export default function Page0() {
  return (
    <>
      <Background offset={0} factor={1} className='bg-sky-300' />
      <Title speed={0.7}>npius</Title>
      <SubTitle offset={0.1} speed={0.7}>
        north pacific international undersea station
      </SubTitle>
    </>
  );
}
