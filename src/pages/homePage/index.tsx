import TestForm from '@demo/components/business/TestTableForm';
import { useRef, useEffect, useCallback, useState } from 'react';
import { jumpToPage } from '@demo/utils/fnTools/adapter/customNavigate';
// import { useCopy } from '@demo/utils/hooks/base/useCopy';
import { myHistory } from '@demo/utils/fnTools/adapter/customHistory';
import { copyToClipboard } from '@demo/utils/fnTools/base/commonFn';
import { useObserver } from '@demo/utils/hooks/base/useObserver';
import { useResize } from '@demo/utils/hooks/base/useResize';
import { ReactComponent as Icon } from '@demo/common/imgs/xin.svg';
import IconSvg from '@demo/components/base/svgIcon';
import SimpleFlowChart from './flowComponents/entryWrap';
import Demo from './reactFlow';
import GridLayout from './gridLayout';
import BigDataChart from './bigDataChart';
import CurveChart from './bigCurveChart';
import styles from './index.less';

const HomePage = () => {
  // const divRef = useRef(null);
  // const [update, setUpdate] = useState({});

  console.log('>>>>123');

  // const divCallBackRef = useCallback((node) => {
  //   console.log('>divCallBackRef111>', node);

  //   if (node !== null) {
  //     // setUpdate({});
  //     console.log('>>>divCallBackRef>');

  //     divRef.current = node;
  //   }
  // }, []);

  const { height, width, targetRef } = useResize();

  console.log('>>>', height, width);

  return (
    <div>
      首页
      <div className={styles.testWrap}>
        {/* <GridLayout /> */}
        <BigDataChart />
        {/* <CurveChart /> */}
      </div>
      <div className={styles.wrap}>
        {/* {
          new Array(4).fill(0).map(item=>{
            return (<div className={styles.inner}>123</div>)
          })
        } */}
        {/* <Icon fill="#336699" /> */}
        {/* <SimpleFlowChart /> */}
        {/* <Demo /> */}
        {/* <a
          onClick={() => {
            // jumpToPage();
            // myHistory.replace('/calibrating');
            copyToClipboard('fffaqq');
          }}
        >
          跳转
        </a>

        <div style={{ height: '300px' }}>
          测试overLay测试overLay测试overLay测试overLay测试overLay测试overLay
        </div>

        <div style={{ height: '30%', width: '100%' }} ref={targetRef}>
          这是测试useObserve
        </div> */}

        {/* <TestForm /> */}
      </div>
    </div>
  );
};

export default HomePage;
