import { createBrowserHistory } from 'history';

console.log('>>>>window', window);

// 在非js文件中使用自定义的跳转
export const myHistory = createBrowserHistory({ window });
