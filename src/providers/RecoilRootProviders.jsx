'use client';

import { RecoilRoot } from 'recoil';

function RecoilRootProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootProvider;
