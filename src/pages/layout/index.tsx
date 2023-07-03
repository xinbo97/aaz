import React, { memo } from 'react';
import { Layout } from 'antd';
import { useOutlet } from 'react-router-dom';
import globalLessVar from '@demo/common/styles/variables.less';
import LeftBlockMenu from './leftBlockMenu';
import RightDropDown from './rightDropDown';
import styles from './index.less';

// ts文件中使用less
console.log('globalLessVar>>>', globalLessVar);

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
  height: Number(globalLessVar.menuHeight),
  paddingInline: 0,
  lineHeight: 'initial',
  backgroundColor: '#fff',
};

const LayoutComp = () => {
  return (
    <Layout className={styles.layoutWrapper}>
      <Header style={headerStyle} className={styles.headerWrap}>
        <div className={styles.headerLeft}>
          {' '}
          <LeftBlockMenu />
        </div>
        <div className={styles.headerCenter}>
          版本信息：hikvision sdk demo 1.0.1-alpha4
        </div>
        <div className={styles.headerRight}>
          {' '}
          <RightDropDown />
        </div>
      </Header>
      <Content>{useOutlet()}</Content>
    </Layout>
  );
};

export default memo(LayoutComp);
