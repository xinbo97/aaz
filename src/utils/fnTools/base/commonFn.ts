import { message } from 'antd';

// 扁平化多维数组
export const flatArr = (arr: any[]) => {
  return arr.flat(Infinity);
};

// 复制文本
export const copyToClipboard = async (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      message.info('复制成功');
    })
    .catch(() => {
      message.info('复制失败');
    });
};
