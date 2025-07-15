// src/redux/chartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchChartData = createAsyncThunk(
  'charts/fetchChartData',
  async () => {
    const response = await fetch('/api/chart-data');
    
     if (!response.ok) {
      throw new Error('Failed to fetch chart data');
    }

    const data = await response.json();
    return data;
  }
);

const chartSlice = createSlice({
  name: 'charts',
  initialState: {
    salesData: [],
    trafficData: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.salesData = action.payload.salesData;
        state.trafficData = action.payload.trafficData;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// ✅ THIS LINE IS MANDATORY
export default chartSlice.reducer;
