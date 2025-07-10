import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getStats = createAsyncThunk('stats/getStats', async () => {
  return [
    { label: 'Visits', value: 1240 },
    { label: 'Sales', value: 980 }
  ];
});
const statsSlice = createSlice({
  name: 'stats',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => { state.status = 'loading'; })
      .addCase(getStats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});
export default statsSlice.reducer;