import React from 'react';
// import type { ReactElement } from 'react';
// import AuthVerify from '@demo/components/base/authPermission/AuthVerify';
import { Spin } from 'antd';

type ComponentType = React.LazyExoticComponent<React.ComponentType<any>>;

const lazyLoad = (Comp: ComponentType) => {
  return (
    <React.Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      }
    >
      {/* <AuthVerify> */}
      <Comp />
      {/* </AuthVerify> */}
    </React.Suspense>
  );
};

export default lazyLoad;
