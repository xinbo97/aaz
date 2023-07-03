import React, { useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { message } from 'antd';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import routes from '@demo/router';

interface IProps {
  [val: string]: any;
  children?: ReactNode;
}

// 获取用户登录状态，实际是从redux/mobx里获取的，这里为方便直接写死变量
const isLogin = false;
const AuthVerify: React.FC<IProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { children } = props;
  // eslint-disable-next-line no-restricted-globals
  const routeInfo = matchRoutes(routes as any, location)!;

  const curPathNeedLogin = useMemo(() => {
    return routeInfo.some((item) => {
      // @ts-ignore
      if (!item.route?.meta) return false;
      // @ts-ignore
      return item.route.meta?.needLogin;
    });
  }, [routeInfo]);
  // eslint-disable-next-line no-restricted-globals
  // useEffect(() => {
  //   // 这里为了持久化处理
  //   const parentPath = routeInfo.slice(0, -1).map((item) => item.pathname);
  //   const prePageTab =
  //     JSON.parse(sessionStorage.getItem('curPageTab') || '') || [];
  //   sessionStorage.setItem(
  //     'curPageTab',
  //     JSON.stringify([...new Set([...parentPath, ...prePageTab])])
  //   );
  // });
  console.log('>>>auth', routeInfo);

  useEffect(() => {
    if (curPathNeedLogin && !isLogin) {
      message.info('请先进行登录');
      //  <Navigate to="/" replace />;
      navigate('/', { replace: true });
    }
  }, [curPathNeedLogin, navigate]);

  // 这里的xxx是拿当前路由信息里是否有needLogin属性

  return <>{children}</>;
};

AuthVerify.defaultProps = {
  children: <></>,
};

export default AuthVerify;
