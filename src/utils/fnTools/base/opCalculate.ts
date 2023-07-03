import { Decimal } from 'decimal.js';

enum FixedMode {
  ROUND_UP = 'ROUND_UP',
  ROUND_DOWN = 'ROUND_DOWN',
  ROUND_HALF_UP = 'ROUND_HALF_UP',
}

type ModeType = keyof typeof FixedMode;

// 格式化数字：百分比显示
export const formatNumPercent = (num: number) => {
  return num.toLocaleString('zh-CN', {
    style: 'percent',
    minimumFractionDigits: 2, // 限制两位
    // useGrouping: false  // 如果百分比不用分割符可设置此属性
  });
};

// 格式化数字--转换为形如 1,000,000,000
export const formatNum = (num: number) => {
  return num.toLocaleString('zh-CN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 9,
  });
};

// 四舍五入并保留位数
export const fixedNum = (
  a: number,
  bits: number = 2,
  mode: ModeType = 'ROUND_HALF_UP'
) => {
  return new Decimal(a).toFixed(bits, Decimal[mode]);
};

// 两数相加
export const addNum = (a: number, b: number) => {
  return Decimal.add(a, b);
};

// 两数相减
export const subNum = (a: number, b: number) => {
  return Decimal.sub(a, b);
};

// 两数相乘
export const mulNum = (a: number, b: number) => {
  return Decimal.mul(a, b);
};

// 两数相除,注意除数不能为0
export const divNum = (a: number, b: number) => {
  return Decimal.mul(a, b);
};

// 计算总数
export const sumNum = (...args: number[]) => {
  return Decimal.sum(...args);
};

// 找最大值
export const maxNum = (...args: number[]) => {
  return Decimal.max(...args);
};

// 找最小值
export const minNum = (...args: number[]) => {
  return Decimal.min(...args);
};

// 向下取整
export const floorNum = (a: number) => {
  return Decimal.floor(a);
};
