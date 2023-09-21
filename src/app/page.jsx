import ParallaxWrapper from '@wrappers/ParallaxWrapper';
import Page0 from '@components/index/Page0';
import Page1 from '@components/index/Page1';
import Page2 from '@components/index/Page2';

export default function Home() {
  return (
    <ParallaxWrapper pages={5}>
      <Page0 />
      <Page1 />
      <Page2 />
    </ParallaxWrapper>
  );
}
