// src/redux/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProjectData = createAsyncThunk(
  'projects/fetchProjectData',
  async () => {
    const response = await fetch('/api/project-data');

    if (!response.ok) {
      throw new Error('failed to fetch project data');
    }

    const data = await response.json();
    console.log("Fetched project data:", data);
    return data;
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
    error: null
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      };
    }
  },
  extraReducers: (builder) => {
  builder
  .addCase(fetchProjectData.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(fetchProjectData.fulfilled, (state, action) => {
    state.loading = false;
    state.projects = action.payload;
  })
  .addCase(fetchProjectData.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  })
}
}


);

export const { addProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
