// @ts-nocheck

import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  DataZoomComponent,
} from 'echarts/components';
import { LineChart, BarChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useRef, memo, useEffect } from 'react';
import { Button } from 'antd';
import styles from './index.less';

echarts.use([
  DatasetComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  DataZoomComponent,
  LineChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
]);

const BigDataChart = () => {
  const chartRef = useRef();

  let option;

  const upColor = '#ec0000';
  const upBorderColor = '#8A0000';
  const downColor = '#00da3c';
  const downBorderColor = '#008F28';
  const dataCount = 2e5;
  const data = generateOHLC(dataCount);
  option = {
    dataset: {
      source: data,
    },
    title: {
      text: `Data Amount: ${echarts.format.addCommas(dataCount)}`,
      top: 'bottom',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
          show: true,
        },
        brush: {
          type: ['polygon'],
        },
      },
    },
    // brush: {
    //   geoIndex: 'rect',
    // },
    grid: [
      {
        left: '10%',
        right: '10%',
        bottom: 200,
      },
      {
        left: '10%',
        right: '10%',
        height: 80,
        bottom: 80,
      },
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: 'dataMin',
        max: 'dataMax',
      },
      {
        type: 'category',
        gridIndex: 1,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        min: 'dataMin',
        max: 'dataMax',
      },
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true,
        },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    // dataZoom: [
    //   {
    //     type: 'inside',
    //     xAxisIndex: [0, 1],
    //     start: 10,
    //     end: 100,
    //   },
    //   {
    //     show: true,
    //     xAxisIndex: [0, 1],
    //     type: 'slider',
    //     bottom: 10,
    //     start: 10,
    //     end: 100,
    //   },
    // ],
    // visualMap: {
    //   show: false,
    //   seriesIndex: 1,
    //   dimension: 6,
    //   pieces: [
    //     {
    //       value: 1,
    //       color: upColor,
    //     },
    //     {
    //       value: -1,
    //       color: downColor,
    //     },
    //   ],
    // },
    series: [
      {
        type: 'line',
        smooth: true,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
        encode: {
          x: 0,
          y: [1, 4, 3, 2],
        },
      },
      {
        name: 'Volumn',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: '#7fbe9e',
        },
        large: true,
        encode: {
          x: 0,
          y: 5,
        },
      },
    ],
  };
  function generateOHLC(count) {
    const data = [];
    let xValue = +new Date(2011, 0, 1);
    const minute = 60 * 1000;
    let baseValue = Math.random() * 12000;
    const boxVals = new Array(4);
    const dayRange = 12;
    for (let i = 0; i < count; i++) {
      baseValue = baseValue + Math.random() * 20 - 10;
      for (let j = 0; j < 4; j++) {
        boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
      }
      boxVals.sort();
      const openIdx = Math.round(Math.random() * 3);
      let closeIdx = Math.round(Math.random() * 2);
      if (closeIdx === openIdx) {
        closeIdx++;
      }
      const volumn = boxVals[3] * (1000 + Math.random() * 500);
      // ['open', 'close', 'lowest', 'highest', 'volumn']
      // [1, 4, 3, 2]
      data[i] = [
        echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', (xValue += minute)),
        +boxVals[openIdx].toFixed(2),
        +boxVals[3].toFixed(2),
        +boxVals[0].toFixed(2),
        +boxVals[closeIdx].toFixed(2),
        +volumn.toFixed(0),
        getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4), // sign
      ];
    }
    console.log('data>>>>', data);

    return data;
    function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
      let sign;
      if (openVal > closeVal) {
        sign = -1;
      } else if (openVal < closeVal) {
        sign = 1;
      } else {
        sign =
          dataIndex > 0
            ? // If close === open, compare with close of last record
              data[dataIndex - 1][closeDimIdx] <= closeVal
              ? 1
              : -1
            : // No record of previous, set to be positive
              1;
      }
      return sign;
    }
  }

  // option &&
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // myChart.dispatchAction({
    //   type: 'brush',
    //   areas: [
    //     {
    //       geoIndex: 0,
    //       // 指定选框的类型。
    //       brushType: 'polygon',
    //       // 指定选框的形状。
    //       coordRange: [
    //         [119.72, 34.85],
    //         [119.68, 34.85],
    //         [119.5, 34.84],
    //         [119.19, 34.77],
    //       ],
    //     },
    //   ],
    // });
    myChart.on('globalcursortaken', (params) => {
      console.log('>>>>globalcursortaken', params);
    });
    myChart.on('dataZoom', (params) => {
      console.log('>>>>params', params);
    });
    myChart.setOption(option);

    myChart.dispatchAction({
      type: 'takeGlobalCursor',
      key: 'dataZoomSelect',
      // 启动或关闭
      dataZoomSelectActive: true,
      // brushOption: {
      //   // 参见 brush 组件的 brushType。如果设置为 false 则关闭“可刷选状态”。
      //   brushType: false,
      //   // 参见 brush 组件的 brushMode。如果不设置，则取 brush 组件的 brushMode 设置。
      //   // brushMode: ''
      // },
    });
    // myChart.clear()
  }, []);

  // function readFileFirefox(fileBrowser) {
  //       try {
  //     netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  // }  catch (e) {
  //     alert('无法访问本地文件，由于浏览器安全设置。为了克服这一点，请按照下列步骤操作：(1)在地址栏输入"about:config";(2) 右键点击并选择 New->Boolean; (3) 输入"signed.applets.codebase_principal_support" （不含引号）作为一个新的首选项的名称;(4) 点击OK并试着重新加载文件');
  //     return;
  // }
  // }
  function handleFileSelect(event) {
    const file = event.target.files[0].value;
    // 这就是文件路径
    const filePath = URL.createObjectURL(file);

    console.log('>>>文件路径>>>>', filePath, 'event>>>>', event);
  }

  //   <div>
  //       <input type="file" onchange="handleFileSelect(event)" />
  //  </div>
  // <script type="text/javascript">
  //     function handleFileSelect(event) {
  //         const file = event.target.files[0].value;
  //         //这就是文件路径
  //         const filePath = URL.createObjectURL(file);}
  // </script>

  return (
    <>
      <div>
        {/* 这是选择的文件路径内容 */}
        {/* <Button onClick={(e) => handleFileSelect(e)}>点击</Button> */}
      </div>
      <div ref={chartRef} className={styles.chartWrap} />;
    </>
  );
};

export default memo(BigDataChart);

//  //FX获取文件路径方法
//  function readFileFirefox(fileBrowser) {
//   try {
//       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
//   }
//   catch (e) {
//       alert('无法访问本地文件，由于浏览器安全设置。为了克服这一点，请按照下列步骤操作：(1)在地址栏输入"about:config";(2) 右键点击并选择 New->Boolean; (3) 输入"signed.applets.codebase_principal_support" （不含引号）作为一个新的首选项的名称;(4) 点击OK并试着重新加载文件');
//       return;
//   }
//   var fileName=fileBrowser.value; //这一步就能得到客户端完整路径。下面的是否判断的太复杂，还有下面得到ie的也很复杂。
//   var file = Components.classes["@mozilla.org/file/local;1"]
//       .createInstance(Components.interfaces.nsILocalFile);
//   try {
//       // Back slashes for windows
//       file.initWithPath( fileName.replace(/\//g, "\\\\") );
//   }
//   catch(e) {
//       if (e.result!=Components.results.NS_ERROR_FILE_UNRECOGNIZED_PATH) throw e;
//       alert("File '" + fileName + "' cannot be loaded: relative paths are not allowed. Please provide an absolute path to this file.");
//       return;
//   }
//   if ( file.exists() == false ) {
//       alert("File '" + fileName + "' not found.");
//       return;
//   }

//   return file.path;
// }

// //根据不同浏览器获取路径
// function getvl(obj){
// //判断浏览器
//   var Sys = {};
//   var ua = navigator.userAgent.toLowerCase();
//   var s;
//   (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
//       (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
//           (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
//               (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
//                   (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
//   var file_url="";
//   if(Sys.ie<="6.0"){
//       //ie5.5,ie6.0
//       file_url = obj.value;
//   }else if(Sys.ie>="7.0"){
//       //ie7,ie8
//       obj.select();
//       file_url = document.selection.createRange().text;
//   }else if(Sys.firefox){
//       //fx
//       //file_url = document.getElementById("file").files[0].getAsDataURL();//获取的路径为FF识别的加密字符串
//       file_url = readFileFirefox(obj);
//   }else if(Sys.chrome){
//       file_url = obj.value;
//   }
//   //alert(file_url);
//   document.getElementById("text").innerHTML="获取文件域完整路径为："+file_url;
