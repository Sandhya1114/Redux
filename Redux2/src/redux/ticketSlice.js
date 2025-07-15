import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk('tickets/fetchtickets',
  async () => {
    const response = await fetch('api/tickets');
    if(!response.ok){
      throw new Error('failed to fetch tickets')
    }
    const data = await response.json();
    return data;
  }
)

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
})

export default ticketSlice.reducer;