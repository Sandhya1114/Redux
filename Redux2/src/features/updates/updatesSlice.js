import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getUpdates = createAsyncThunk('updates/getUpdates', async () => {
  return ['Updated profile', 'Fixed bug in dashboard'];
});
const updatesSlice = createSlice({
  name: 'updates',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(getUpdates.pending, (state) => { state.status = 'loading'; })
      .addCase(getUpdates.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      });
  },
});
export default updatesSlice.reducer;