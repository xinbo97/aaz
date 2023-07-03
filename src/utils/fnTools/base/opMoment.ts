import moment from 'moment';

// 获取时间戳
export const getTimestamp = (val?: string) => {
  return moment(val).valueOf();
};

// 获取本月的总天数
export const getCurMonthDays = () => {
  return moment().daysInMonth();
};

// 格式化时间
export const formatTime = (timestamp: number) => {
  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss'); // 年-月-日 时:分:秒
};

// 相对时间
export const getRelativeTime = (timestamp: number) => {
  return moment(timestamp).fromNow(true);
};

// 比较时间
export const timeIsAfter = (timestamp: number, aimStamp: number) => {
  return moment(timestamp).isAfter(aimStamp);
};
