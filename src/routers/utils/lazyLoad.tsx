import React, { Suspense } from 'react';
// import { LoadingOutlined } from '@ant-design/icons';
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
import { Spin } from 'antd';

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => (
  <Suspense
    fallback={
      <Spin
        size="large"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      />
    }
  >
    <Comp />
  </Suspense>
);

export default lazyLoad;