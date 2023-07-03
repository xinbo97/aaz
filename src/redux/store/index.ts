import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual,
} from 'react-redux';
import permissionSlice from '../business/permissionSlice';
import userInfoSlice from '../business/userInfoSlice';

const store = configureStore({
  reducer: {
    permissionSlice,
    userInfoSlice,
  },
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// 隔离第三方库直接暴露的API
export const useMySelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useMyDispatch: () => DispatchType = useDispatch;
export const myShallowEqual = shallowEqual;

export default store;
