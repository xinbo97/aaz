// @ts-nocheck
import React from 'react';
import { node } from 'webpack';
import NodeContent from '../nodeContent';
import Node from '../node';
import ArrowLine from '../../LineRelated/arrowLine';
import styles from './index.module.less';

const NormalNode = (props) => {
  const { data } = props;
  return (
    <div className={`${styles.sfcNormalNodeContainer} ${styles.vertical}`}>
      {/* 节点内容 */}
      <div className={styles.sfcNormalNodeWrap}>
        <NodeContent data={data} />
        <ArrowLine />
      </div>
      {/* 递归渲染后续Node组件 */}
      {(data.nodeList || []).map((item) => {
        return <Node key={item.id} data={item} />;
      })}
    </div>
  );

  // <div>NormalNode</div>;
};

export default NormalNode;
