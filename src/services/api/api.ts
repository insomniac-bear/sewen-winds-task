import { createAsyncThunk } from '@reduxjs/toolkit';
import eID from '../../const/settings.json';
import { IRow } from '../types';

export const config = {
  baseUrl: "http://185.244.172.108:8081/v1/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchRows = createAsyncThunk('rows/getRows', async () => {
  try {
    const response = await fetch(`${config.baseUrl}/outlay-rows/entity/${eID.id}/row/list`);
    return response.json();
  } catch (err: any) {
    console.log(err.message);
  }
});

export const createRow = createAsyncThunk('rows/createRow', async (data: IRow) => {
  try {
    const response = await
    fetch(`${config.baseUrl}/outlay-rows/entity/${eID.id}/row/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (err: any) {
    console.log(err.message);
  }
});

export const updateRow = createAsyncThunk('rows/updateRow', async ({ id, data }: {id: number, data: IRow}) => {
  try {
    const response = await
    fetch(`${config.baseUrl}/outlay-rows/entity/${eID.id}/row/${id}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (err: any) {
    console.log(err.message);
  }
});

export const removeRow = createAsyncThunk('rows/removeRow', async ( id: number | undefined) => {
  try {
    const response = await
    fetch(`${config.baseUrl}/outlay-rows/entity/${eID.id}/row/${id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (err: any) {
    console.log(err.message);
  }
});
