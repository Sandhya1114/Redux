// src/features/projects/projectsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getProjects = createAsyncThunk('projects/getProjects', async () => {
  return [{ id: 1, name: 'Website Redesign', progress: 70 }, { id: 2, name: 'API Integration', progress: 45 }];
});
const projectsSlice = createSlice({
  name: 'projects',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => { state.status = 'loading'; })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      });
  },
});
export default projectsSlice.reducer;