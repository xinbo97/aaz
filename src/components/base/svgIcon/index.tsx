import React from 'react';
import styles from './index.less';

interface IProps extends React.SVGProps<SVGSVGElement> {
  type: string;
  className?: string;
}

function Icon(props: IProps) {
  const { type, className, ...rest } = props;
  return (
    <svg className={`${styles.icon} ${className}`} {...rest} aria-hidden="true">
      <use xlinkHref={`#${type}`} />
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
};

export default Icon;
