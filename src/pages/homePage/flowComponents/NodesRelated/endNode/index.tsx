// @ts-nocheck
import React from 'react';
import styles from './index.module.less';

const EndNode = (props) => {
  const { data } = props;
  return <div className={styles.sfcEndNodeContainer}>{data.title}</div>;
};

export default EndNode;
