/* eslint-disable */
// @ts-nocheck
const  arr = new Array(6).fill({})
arr[1]={receive:true}
// arr[2]={receive:true}
// arr[3]={receive:true}
arr[4]={receive:true}
// arr[5]={receive:true}



const obj={}
const half=arr.length / 2
console.log(half);

// 这里用for循环,half是正整数的情况
for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];
    // 当前正在处理的节点的key：左侧从左到右处理；右侧从右到左处理；
   const realKey=idx<half?idx :arr.length-1-idx+half
   const nextKey = idx<half?realKey-1:realKey+1

    if( (obj[realKey]??0)!==0) {
        // 中断循环
        continue
    }
 
    const aimItem=idx<half?item:arr[arr.length-1-idx+half]
    const arrNum=idx<half?half-idx:arr.length-idx
    const direction=idx<half?'right':'left'
    
    if(aimItem.receive){
        const ab= new Array(arrNum).fill(0)
        ab.forEach((_item,_idx)=>{
            // set设置值的时候左侧一半从左->右；右侧一半从右->左
            const setKey=idx<half?realKey+_idx:realKey-_idx

            if(realKey===0||realKey===(arr.length-1)) return obj[setKey]='all'
            // 如果赋值节点是当前真实处理的节点
            if(setKey===realKey){
                if(obj[realKey+1]) return  obj[setKey]='all'
                return  obj[setKey]=direction
            }
            return obj[setKey]='all'

        })
    }else{
        obj[realKey]=''
    }

    


//     if(idx<half){
//     if(item.receive){
      
//         const ab= new Array(half-idx).fill(0)
      
//         ab.forEach((_item,_idx)=>{
           
//             obj[_idx+idx]=idx===0?"all": _idx+idx===idx?"right":"all"
//         })

//     }else{
//         obj[idx]=''
//     }
// }else{
//     console.log('idx',idx);
//     // 如果超过一半从后往前
//     if(arr[arr.length-1-idx+half].receive){
//         const ab= new Array(arr.length-idx).fill(0)
//         const objKey=arr.length-1-idx+half
//         ab.forEach((_item,_idx)=>{
//             // 如果是最后一个节点
//             if((objKey-_idx)===(arr.length-1)) return obj[objKey-_idx]="all"
//             // 如果设置的是当前节点
//             if((objKey-_idx)===objKey){
//                 console.log(objKey-_idx);
//                 // 如果左/右侧有流入则为all
//                 if(obj[nextKey]) return  obj[objKey-_idx]='all'
//                 return  obj[objKey-_idx]="left"
//             }
//             return  obj[objKey-_idx]="all"

//         })
//     }else{
//         obj[arr.length-1-idx+half]=''
//     }


// }
    
}


console.log('>>obj>',obj);

// // half是小数的情况（2.5）
// arr.forEach((item,idx)=>{
// const opHalf=half+.5
// // 有值并且小于3，小于3可以不用加上 (有值就中断)
// if( ((obj[idx]??0)!==0)) {
//     // 中断循环
// }

// if(idx<half){
//     const opHalf=half+.5
//     if(item.receive){
       
//         const ab= new Array(opHalf-idx).fill(0)
//         ab.forEach((_item,_idx)=>{
//             obj[_idx+idx]=idx===0?"all": (_idx+idx===idx)?"right":_idx+idx===(half-.5)?'left':  "all"
//         })

//     }else{
//         obj[idx]=''
//     }
// }else{
//     const opHalf=half+.5
//       // 如果超过一半从后往前
//       if(arr[arr.length-1-idx+opHalf].receive){
//         const ab= new Array(arr.length-idx+1).fill(0)
//         const objKey=arr.length-1-idx+opHalf
//         ab.forEach((_item,_idx)=>{
//             obj[objKey-_idx]=(objKey-_idx)===(arr.length-1)?"all": (objKey-_idx)===idx?obj[objKey-_idx]?'all': "right"  :"all"
//         })
//     }else{
//         obj[idx]=''
//     }
// }




// })


// const midForFn=()=>{

//     const midIdx= math.floor(arr.length/2)
//     let firIdx=0
//     let lastIdx=arr.length-1
//     while((obj[midIdx]??0)===0){
//       const firNode=arr[firIdx].receive
//       const lastIdx=arr[lastIdx].receive
//       let cur=0
//       if(firNode){
//         obj[cur]='all'
//       }

//     }
// }