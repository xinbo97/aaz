import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import store from '@demo/redux/store';

import HistoryRouter from '@demo/components/business/HistoryRouter';
import { myHistory } from '@demo/utils/fnTools/adapter/customHistory';
import App from './App';
import 'normalize.css';
import '@demo/common/styles/index.less';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// const CRouter = createHashRouter(
//   createRoutesFromElements(
//     // <div className={styles.appWrapper}>
//     // <AuthVerify>
//     <App />
//     // </AuthVerify>
//     // </div>
//   )
// );
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <HistoryRouter history={myHistory}>
        <App />
      </HistoryRouter>
    </ConfigProvider>
  </Provider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example-reply', (arg: any) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
