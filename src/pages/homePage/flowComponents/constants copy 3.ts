// 结构说明：数组元素每一项都是一个层级：目前这种结构分三级：开始层级节点-内容层级节点-结束层级节点
// 内容层级节点中由于有关联关系，我们将层级继续分为 分支结构（condition-对应分支节点） 普通结构（normal对应普通节点）
// 分支结构有children、nodeList；children 表示此分支层级下要被渲染出来的节点（即分支节点不渲染本身内容，而是渲染其children里的内容）
// 分支结构的nodeList 表示这一层的下一层的节点内容
//

export default [
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: '随机id1',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: '随机id1-1',
        type: 'normal',
        title: '前进样口',
        content: '前进样口的内容',
        configData: {},
        nodeList: [
          {
            id: '随机id1-1--1',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: '随机id1-1--1-1',
                title: '色谱柱1',
                content: '色谱柱1的内容',
                type: 'normal',
                configData: {},
                nodeList: [
                  // {
                  //   id: '随机id3-2-11-112',
                  //   type: 'normal',
                  //   title: '前检测器',
                  //   content: '前检测器的内容',
                  //   configData: {},
                  //   nodeList: [],
                  // },
                ],
              },
              {
                id: '随机id1-1--1-1',
                title: '色谱柱1',
                content: '色谱柱1的内容',
                type: 'normal',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-1--1-1',
                title: '色谱柱1',
                content: '色谱柱1的内容',
                type: 'normal',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-1--1-2',
                type: 'normal',
                title: '色谱柱3',
                content: '色谱柱3的内容',
                configData: {},
                nodeList: [
                  // {
                  //   id: '随机id3-2-11-112',
                  //   type: 'normal',
                  //   title: '前检测器',
                  //   content: '前检测器的内容',
                  //   configData: {},
                  //   nodeList: [],
                  // },
                ],
              },
            ],
            nodeList: [
              // {
              //   id: '随机id1-1--1--1',
              //   type: 'normal',
              //   title: '前检测器',
              //   content: '前检测器的内容',
              //   configData: {},
              //   nodeList: [],
              // },
              {
                id: '随机id1-1--1--1',
                type: 'condition',
                title: '前检测器',
                content: '前检测器的内容',
                configData: {},
                nodeList: [],
                children: [
                  {
                    id: '随机id1-1--1-1',
                    title: '色谱柱1',
                    content: '色谱柱1的内容',
                    type: 'normal',
                    configData: {},
                    nodeList: [
                      // {
                      //   id: '随机id3-2-11-112',
                      //   type: 'normal',
                      //   title: '前检测器',
                      //   content: '前检测器的内容',
                      //   configData: {},
                      //   nodeList: [],
                      // },
                    ],
                  },
                  {
                    id: '随机id1-1--1-1',
                    title: '色谱柱1',
                    content: '色谱柱1的内容',
                    type: 'normal',
                    configData: {},
                    nodeList: [
                      // {
                      //   id: '随机id3-2-11-112',
                      //   type: 'normal',
                      //   title: '前检测器',
                      //   content: '前检测器的内容',
                      //   configData: {},
                      //   nodeList: [],
                      // },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '随机id1-2',
        type: 'normal',
        title: '后进样口',
        content: '后进样口的内容',
        configData: {},
        nodeList: [
          {
            id: '随机id1-2--1',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: '随机id1-2--1-1',
                title: '色谱柱2',
                content: '色谱柱2的内容',
                type: 'normal',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-2--1-2',
                type: 'normal',
                title: '色谱柱4',
                content: '色谱柱4的内容',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-2--1-3',
                type: 'normal',
                title: '色谱柱5',
                content: '色谱柱5的内容',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-2--1-4',
                type: 'normal',
                title: '色谱柱6',
                content: '色谱柱6的内容',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-2--1-5',
                type: 'normal',
                title: '色谱柱7',
                content: '色谱柱7的内容',
                configData: {},
                nodeList: [],
              },
              {
                id: '随机id1-2--1-6',
                type: 'normal',
                title: '色谱柱8',
                content: '色谱柱8的内容',
                configData: {},
                nodeList: [],
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: '随机id3',
  //   type: 'condition',
  //   title: '条件分支',
  //   children: [
  //     {
  //       id: '随机id3-1',
  //       title: '通过',
  //       content: '理由充分',
  //       type: 'normal',
  //       configData: {},
  //       nodeList: [
  //         {
  //           id: '随机id3-1-1',
  //           type: 'normal',
  //           title: '审批人',
  //           content: '上级主管',
  //           configData: {},
  //           nodeList: [
  //             {
  //               id: '随机id3-1-1-1',
  //               type: 'condition',
  //               title: '条件分支',
  //               children: [
  //                 {
  //                   id: '随机id3-1-1-1-1',
  //                   title: '通过',
  //                   content: '理由充分',
  //                   type: 'normal',
  //                   configData: {},
  //                   nodeList: [],
  //                 },
  //                 {
  //                   id: '随机id3-1-1-1-2',
  //                   type: 'normal',
  //                   title: '驳回',
  //                   content: '理由不充分',
  //                   configData: {},
  //                   nodeList: [],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: '随机id3-2',
  //       type: 'normal',
  //       title: '指派',
  //       content: 'HR',
  //       configData: {},
  //       nodeList: [
  //         {
  //           id: '随机id3-2-1',
  //           type: 'condition',
  //           title: '条件分支',
  //           children: [
  //             {
  //               id: '随机id3-2-1-1',
  //               title: '通过',
  //               content: '理由充分',
  //               type: 'normal',
  //               configData: {},
  //               nodeList: [],
  //             },
  //             {
  //               id: '随机id3-2-1-2',
  //               type: 'normal',
  //               title: '驳回',
  //               content: '理由不充分',
  //               configData: {},
  //               nodeList: [],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: '随机id3-3',
  //       type: 'normal',
  //       title: '驳回',
  //       content: '理由不充分',
  //       configData: {},
  //       nodeList: [],
  //     },
  //   ],
  // },
  { id: 'endEvent', type: 'end', title: '结束' },
];
