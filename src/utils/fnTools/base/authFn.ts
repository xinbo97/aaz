import { message } from 'antd';

// 从状态库拿用户角色
const curRole = 'test1';
export const authFn = (oriFn: any, allowance?: any) => {
  if (allowance && !allowance.includes(curRole))
    return message.error('当前用户无操作权限');

  return (...arg: any[]) => {
    oriFn(...arg);
  };
};

// // example
// const handleFn =(a,b,c)=>{
//   console.log('执行内部逻辑',a,b,c);

// }

// // 声明
// const authHandleFn=authFn(handleFn)

// // 调用
// authHandleFn(1,2,3)
