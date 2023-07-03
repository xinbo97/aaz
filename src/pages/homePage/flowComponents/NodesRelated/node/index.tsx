// @ts-nocheck
import React from 'react';
import NormalNode from '../normalNode';
import EndNode from '../endNode';
import StartNode from '../startNode';
import ConditionNode from '../conditionNode';
import styles from './index.less';

const ComponentMap = {
  start: StartNode,
  end: EndNode,
  condition: ConditionNode,
};

const Node = (props) => {
  const { data } = props;
  console.log('>>>data', data);

  const generateNodes = () => {
    let AimNode = NormalNode;
    if (ComponentMap[data.type]) AimNode = ComponentMap[data.type];
    return <AimNode data={data} />;
  };

  return <div className={styles.sfcNodeContainer}>{generateNodes()}</div>;
};

export default Node;
