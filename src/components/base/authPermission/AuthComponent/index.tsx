import React from 'react';
import type { ReactNode } from 'react';

interface IProps {
  [val: string]: any;
  allowance?: string[] | string; // 允许展示组件的权限
  children?: ReactNode;
}

// 获取用户角色，实际是从redux/mobx里获取的，这里为方便直接写死变量
const roles = 'test1';
const AuthComponent: React.FC<IProps> = (props) => {
  const { children, allowance } = props;

  if (allowance?.includes(roles) || !allowance) return <>{children}</>;

  return <></>;
};

AuthComponent.defaultProps = {
  children: <></>,
  allowance: '',
};

export default AuthComponent;
