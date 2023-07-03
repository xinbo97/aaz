import React from 'react';
import {
  useRoutes,
  createHashRouter,
  RouterProvider,
  Router,
  HashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import useFormatRoutes from '@demo/utils/hooks/base/useFormatRoutes';
// import styles from '@demo/renderer/App.less';
import AuthVerify from '@demo/components/base/authPermission/AuthVerify';
import AllRoutes from '@demo/router/index';

import HistoryRouter from '@demo/components/business/HistoryRouter';
import { myHistory } from '@demo/utils/fnTools/adapter/customHistory';
import styles from '@demo/renderer/App.less';

// const C1Router = createHashRouter(AllRoutes);
// // @ts-ignore

// const globalRoutersApp = C1Router;

function App() {
  const { resultRoutes } = useFormatRoutes();

  //
  // const CRouter = createHashRouter(
  //   // @ts-ignore
  //   resultRoutes
  // );

  // globalRoutersApp = CRouter as typeof CRouter;

  return (
    <div className={styles.appWrapper}>
      {/* <RouterProvider router={CRouter} fallbackElement={<AuthVerify />} /> */}
      {/* <HistoryRouter history={myHistory}> */}
      {/*  @ts-ignore */}
      <AuthVerify>{useRoutes(resultRoutes)}</AuthVerify>
      {/* </HistoryRouter> */}
    </div>
  );
}

export default App;

// export const globalRouters = globalRoutersApp;
