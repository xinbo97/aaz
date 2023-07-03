// @ts-nocheck
import React from 'react';
import ArrowLine from '../../LineRelated/arrowLine';
import styles from './index.less';

const StartNode = (props) => {
  const { data } = props;

  return (
    <div className={`${styles.sfcStartNodeContainer} ${styles.vertical}`}>
      <div className={styles.sfcStartNodeContent}>{data.title}</div>
      <ArrowLine />
    </div>
  );
};

export default StartNode;
