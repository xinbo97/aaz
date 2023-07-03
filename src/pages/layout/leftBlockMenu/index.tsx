import { useState, memo } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFormatRoutes from '@demo/utils/hooks/base/useFormatRoutes';
import styles from './index.less';

const LeftBlockMenu = () => {
  const navigate = useNavigate();
  const { resultMenuItems } = useFormatRoutes();
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className={styles.headerMenu}>
      <Menu
        className={styles.menu}
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[current]}
        items={resultMenuItems}
      />
    </div>
  );
};

export default memo(LeftBlockMenu);
