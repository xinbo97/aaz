// @ts-nocheck
import Node from './NodesRelated/node';
import data from './constants';
import styles from './index.less';

const SimpleFlowChart = () => {
  const generateNodes = () => {};

  return (
    <div className={styles.sfcContainer}>
      <div className={`${styles.sfcContent} ${styles.vertical}`}>
        {data.map((item) => {
          return <Node key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default SimpleFlowChart;
