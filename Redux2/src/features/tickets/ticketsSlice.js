import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getTickets = createAsyncThunk('tickets/getTickets', async () => {
  return [{ id: 1, subject: 'Login issue' }, { id: 2, subject: 'Page not loading' }];
});
const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => { state.status = 'loading'; })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      });
  },
});
export default ticketsSlice.reducer;