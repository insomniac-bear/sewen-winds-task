import { createSlice } from '@reduxjs/toolkit';
import { fetchRows, removeRow } from '../api/api';
import { IRowState } from './rows-state.types';
import { RootState } from '../configure-store';

const initialState: IRowState = {
  rows: [],
  status: 'idle',
  error: undefined,
};

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRows.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchRows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rows = action.payload;
      })
      .addCase(fetchRows.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(removeRow.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(removeRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.rows = action.payload;
      })
      .addCase(removeRow.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
});

export const getRowsLoadStatus = (state: RootState) => state.rows.status;
export const getRows = (state: RootState) => state.rows.rows;
