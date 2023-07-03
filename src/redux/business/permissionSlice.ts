import { createSlice } from '@reduxjs/toolkit';

const permissionSlice = createSlice({
  name: 'permissionSlice',
  initialState: {
    token: '',
    role: 'test',
  },
  reducers: {
    changeToken(state, { payload }) {
      state.token = payload;
    },
    changeUserRole(state, { payload }) {
      state.role = payload;
    },
  },
});

export const { changeToken, changeUserRole } = permissionSlice.actions;

export default permissionSlice.reducer;
