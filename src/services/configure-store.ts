import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { formSlice } from './form-slice/form-slice';
import { rowsSlice } from './rows-slice/row.slice';

const state = configureStore({
  reducer: {
    rows: rowsSlice.reducer,
    form: formSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default state;
