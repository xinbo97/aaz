import { lazy } from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';
import AuthVerify from '@demo/components/base/authPermission/AuthVerify';
import Layout from '@demo/pages/layout';
import lazyLoad from '@demo/utils/fnTools/base/lazyLoad';
import type { RouteObjectCustom } from './types';

// 兜底页

const NotFound = lazyLoad(
  lazy(
    () =>
      import(
        /* webpackChunkName: "NotFound" */ '@demo/components/base/notFound'
      )
  )
);

// 首页
const HomePage = lazyLoad(
  lazy(() => import(/* webpackChunkName: "homePage" */ '@demo/pages/homePage'))
);

// 仪器模块
const InstrumentModules = lazyLoad(
  lazy(
    () =>
      import(
        /* webpackChunkName: "instrumentModules" */ '@demo/pages/instrumentModules'
      )
  )
);

// 监控总览
const Monitor = lazyLoad(
  lazy(() => import(/* webpackChunkName: "monitor" */ '@demo/pages/monitor'))
);

// 光谱标定
const Calibrating = lazyLoad(
  lazy(
    () =>
      import(/* webpackChunkName: "calibrating" */ '@demo/pages/calibrating')
  )
);

// 谱图分析
const Analysis = lazyLoad(
  lazy(() => import(/* webpackChunkName: "analysis" */ '@demo/pages/analysis'))
);

const routes: RouteObjectCustom[] = [
  {
    path: '/',
    name: '默认项',
    notShow: true,
    needShowInner: true,
    element: (
      // <AuthVerify>
      <Layout />
      // </AuthVerify>
    ),
    children: [
      {
        index: true,
        notShow: true,
        element: <Navigate replace to="/homePage" />,
      },
      {
        path: '/homePage',
        name: '首页',
        element: HomePage,
        meta: {
          // roles: ['qq'], // 方便以后进行权限控制
        },
      },
      {
        path: '/instrumentModules',
        name: '仪器模块',
        element: InstrumentModules,
        meta: {
          roles: ['qq'], // 方便以后进行权限控制
          needLogin: true, // 是否要登录权限
        },
      },
      {
        path: '/monitor',
        name: '监控总览',
        element: Monitor,
      },
      {
        path: '/calibrating',
        name: '光谱标定',
        element: Calibrating,
      },
      {
        path: '/analysis',
        name: '谱图分析',
        element: Analysis,
        // abc: 'f',
        meta: {
          needLogin: true,
        },
      },
    ],
  },
  {
    path: '*',
    name: '兜底项',
    element: NotFound,
  },
];

// @ts-ignore
export default routes;
