import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState: {
    userInfo: {
      name: 'userInfo1',
    },
  },
  reducers: {
    changeUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
});

export const { changeUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
