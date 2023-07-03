import { useMemo } from 'react';
import {
  filterRoutes,
  formatItem,
} from '@demo/utils/fnTools/base/filterRoutes';
import { useMySelector, myShallowEqual } from '@demo/redux/store';
import allRoutes from '@demo/router/index';

// 筛选动态路由，将不符合角色权限的路由筛掉
const useFormatRoutes = () => {
  const { role } = useMySelector(
    (state) => state.permissionSlice,
    myShallowEqual
  );

  const resultRoutes = useMemo(() => {
    // 这里的第二个参数是当前用户角色，后续如果要加的话从store里获取,并且依赖项里增加store里的角色值
    return filterRoutes(allRoutes, role)!;
  }, [role]);

  const resultMenuItems = useMemo(() => {
    return formatItem(resultRoutes)!;
  }, [resultRoutes]);

  return {
    resultRoutes,
    resultMenuItems,
  };
};

export default useFormatRoutes;
