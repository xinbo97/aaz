import type { ReactNode } from 'react';
import { useLayoutEffect, useState } from 'react';
import { History } from 'history';
import { Router } from 'react-router-dom';

export interface BrowserRouterProps {
  history: History;
  basename?: string;
  children?: ReactNode;
}
export default function HistoryRouter({
  basename,
  children,
  history,
}: BrowserRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: {
      ...history.location,
      pathname:
        history.location.pathname === '/index.html'
          ? '/'
          : history.location.pathname,
    }, // 初始化时,由于我们在webpack里配置了默认入口资源是index.html 所以，window 上的localtion对象里pathname是 'index.html'，但实际上我们路由router的入口配的是/；
    //  解决方法：1、要不将webpack里配的fileName从 index.html 改为 / ；2、要不这里做如上判断进行转换；3、要不改router入口路径为 index.html
  });

  console.log('>>>basenam11e>', basename, state, history);

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
