/* eslint-disable */
// // @ts-nocheck
// // import ReactFlow from 'reactflow';
// import ReactFlow from 'react-flow-renderer';
// import 'reactflow/dist/style.css';

// const elements = [
//   // node
//   {
//     id: '1',
//     data: {
//       label: 'Node 1',
//     },
//     position: { x: 250, y: 25 },
//   },
//   {
//     id: '2',
//     data: {
//       label: 'Node 2',
//     },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: '3',
//     data: {
//       label: 'Node 3',
//     },
//     position: { x: 250, y: 250 },
//   },
//   // edge
//   { id: 'e1-2', source: '1', target: '2' },
//   { id: 'e2-3', source: '2', target: '3' },
// ];

// const arr = [
//   {
//     id: '1',
//     type: 'input',
//     data: {
//       label: (
//         <>
//           Welcome to <strong>React Flow!</strong>
//         </>
//       ),
//     },
//     position: { x: 250, y: 0 },
//   },
//   {
//     id: '2',
//     data: {
//       label: (
//         <>
//           This is a <strong>default node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     data: {
//       label: (
//         <>
//           This one has a <strong>custom style</strong>
//         </>
//       ),
//     },
//     position: { x: 400, y: 100 },
//     style: {
//       background: '#D6D5E6',
//       color: '#333',
//       border: '1px solid #222138',
//       width: 180,
//     },
//   },
//   {
//     id: '4',
//     position: { x: 250, y: 200 },
//     data: {
//       label: 'Another default node',
//     },
//   },
//   {
//     id: '5',
//     data: {
//       label: 'Node id: 5',
//     },
//     position: { x: 250, y: 325 },
//   },
//   {
//     id: '6',
//     type: 'output',
//     data: {
//       label: (
//         <>
//           An <strong>output node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 480 },
//   },
//   {
//     id: '7',
//     type: 'output',
//     data: { label: 'Another output node' },
//     position: { x: 400, y: 450 },
//   },
//   { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
//   { id: 'e1-3', source: '1', target: '3' },
//   {
//     id: 'e3-4',
//     source: '3',
//     target: '4',
//     animated: true,
//     label: 'animated edge',
//   },
//   {
//     id: 'e4-5',
//     source: '4',
//     target: '5',
//     arrowHeadType: 'arrowclosed',
//     label: 'edge with arrow head',
//   },
//   {
//     id: 'e5-6',
//     source: '5',
//     target: '6',
//     type: 'smoothstep',
//     label: 'smooth step edge',
//   },
//   {
//     id: 'e5-7',
//     source: '5',
//     target: '7',
//     type: 'step',
//     style: { stroke: '#f6ab6c' },
//     label: 'a step edge',
//     animated: true,
//     labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
//   },
// ];

// export default function Demo() {
//   return (
//     <div style={{ height: 300 }}>
//       <ReactFlow nodes={arr} />
//     </div>
//   );
// }

// @ts-nocheck
import React, { useCallback,useEffect,useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { Button} from 'antd'
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './initial-elements';
import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';
import './overview.css';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [testNodes,setTestNodes]=useState('fff')
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });
  console.log('>>22>');


//   useEffect(()=>{
//     setInterval(()=>{
//         setNodes((pre)=>{
//             console.log('>>pre',pre);
//            const newNodes= pre.map((item,idx)=>{
//                 if(idx===0) return {...item,data:{label:`这是点击了>>${Math.random()}`}}
//                 return item
//             })
//             return newNodes
//          } )
//     },3000)
//   },[])

// useEffect(() => {
//     setNodes((nds) =>
//       nds.map((node) => {
//         if (node.id === '1') {
//           // it's important that you create a new object here
//           // in order to notify react flow about the change
//           node.data = {
//             ...node.data,
//             label: 'ff'+Math.random(),
//           };
//         }

//         return node;
//       })
//     );
//   }, [testNodes, setNodes]);

  return (
    <> 
      <div className='bbttnn'>
    <Button onClick={()=>{
        // const newNodes= nodes
        // newNodes[0].data.label='这是点击了>>'+Math.random()
        console.log('>>>');
        // setTestNodes(`fff${Math.random()}`)

                setNodes((pre)=>{
            console.log('>>pre',pre);
           const newNodes= pre.map((item,idx)=>{
                if(idx===0) return {...item,data:{label:`这是点击了>>${Math.random()}`}}
                return item
            })
            return newNodes
         } )

    //     setNodes((nds) =>
    //     nds.map((node) => {
    //       if (node.id === '1') {
    //         // it's important that you create a new object here
    //         // in order to notify react flow about the change
    //         node.data = {
    //           ...node.data,
    //           label: 'ff'+Math.random(),
    //         };
    //       }

          
  
    //       return node;
    //     })
    //   );
        // setNodes((pre)=>{
        //     console.log('>>pre',pre);
            
        //     return[...newNodes]
        //  } )
    }}>{'点击'}</Button>
    </div>
    
   
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
    //   onEdgesChange={onEdgesChange}
    //   onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      
       
      <MiniMap style={minimapStyle}   />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
    </>
  );
};

export default OverviewFlow;
