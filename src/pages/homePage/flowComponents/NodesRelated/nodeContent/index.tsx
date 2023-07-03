import React from 'react';
import arrowSvg from '@demo/common/imgs/svg/arrow.svg';
import styles from './index.module.less';

const NodeContent = (props) => {
  const { data } = props;
  return (
    <div className={styles.sfcNormalNodeContent}>
      <div className={styles.sfcNormalNodeTitle}>{data.title || ''}</div>
      <div className={styles.sfcNormalNodeData}>
        <div className={styles.sfcNormalNodeDataText}>{data.content || ''}</div>
        {/* <img className={styles.sfcNormalNodeDataIcon} src={arrowSvg} alt="" /> */}
      </div>
    </div>
  );
};

export default NodeContent;
