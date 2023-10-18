import ParallaxProvider from '@providers/ParallaxProvider';

import Section0 from '@containers/index/Section0';
import Section1 from '@containers/index/Section1';
import Section2 from '@containers/index/Section2';
import Section3 from '@containers/index/Section3';
import Section4 from '@containers/index/Section4';
import Section5 from '@containers/index/Section5';
import Section6 from '@containers/index/Section6';
import Section7 from '@containers/index/Section7';
import Section8 from '@containers/index/Section8';
import Section9 from '@containers/index/Section9';
import Section10 from '@containers/index/Section10';
import Section11 from '@containers/index/Section11';
import SnapPage from '@components/common/SnapPage';
import SnapPages from '@components/common/SnapPages';

import { useId } from 'react';

export default function Home() {
  const sections = [
    Section0,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
  ];

  return (
    // <SnapPages>
    <ParallaxProvider
      pages={12}
      innerStyle={{ overflowY: 'scroll', scrollSnapType: 'y mandatory' }}
      // className={'h-screen overflow-y-scroll snap-mandatory snap-y'}
    >
      {sections.map((Section, index) => (
        <>
          <SnapPage key={useId()} className={index}>
            <Section />
          </SnapPage>
        </>
      ))}
    </ParallaxProvider>
    // </SnapPages>
  );
}
