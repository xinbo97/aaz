// @ts-nocheck
import React from 'react';
import Node from '../node';
import ArrowLine from '../../LineRelated/arrowLine';
import styles from './index.module.less';

const ConditionNode = (props) => {
  const { data } = props;
  return (
    <div className={`${styles.sfcConditionNodeContainer} ${styles.vertical}`}>
      <div className={styles.sfcConditionNodeItemList}>
        {(data?.children || []).map((item) => {
          return (
            <div className={styles.sfcConditionNodeItem} key={item.id}>
              {/*  NodeItem盒子的顶部线 */}
              <div
                className={`${styles.sfcConditionNodeItemLine}

                 `}
                //  ${styles.sfcConditionNodeItemFirstLine}
              />
              {/* NodeItem盒子的底部线  */}
              <div
                className={`${styles.sfcConditionNodeItemLine} ${styles.sfcConditionNodeItemLastLine}`}
              />
              {/*  连接竖线和节点的水平线 */}
              <div className={`${styles.sfcConditionNodeItemLinkLine}`} />
              <div className={styles.sfcConditionNodeItemNodeWrap}>
                <Node data={item} />
                {/* 连接较短分支和分支整体右侧的水平线 */}
                <div className={styles.sfcConditionNodeItemLinkCrossLine} />
              </div>
            </div>
          );
        })}
      </div>
      <ArrowLine />
      {(data?.nodeList || []).map((item) => {
        return <Node key={item.id} data={item} />;
      })}
    </div>
  );
};

export default ConditionNode;
