import { memo, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { DropdownItemType } from '../types';
import styles from './index.less';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: '修改后台登录地址',
    key: DropdownItemType.modify,
  },
  {
    label: '退出登录',
    key: DropdownItemType.logout,
  },
];

const RightDropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  console.log('right');

  return (
    <div ref={dropDownRef} className={styles.dropdownWrapper}>
      <Dropdown
        menu={{ items, onClick }} // 防止滚动或者点击跳页面出现下拉框没卸载的问题
        getPopupContainer={() => dropDownRef.current!}
      >
        {/* eslint-disable-next-line */}
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            张三
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default memo(RightDropDown);
