// src/redux/projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Herman Beck',
      dueDate: 'May 15, 2015',
      progress: 25,
      status: 'success'
    },
    {
      id: 2,
      name: 'Messsy Adam',
      dueDate: 'Jul 01, 2015',
      progress: 75,
      status: 'danger'
    },
    {
      id: 3,
      name: 'John Richards',
      dueDate: 'Apr 12, 2015',
      progress: 90,
      status: 'warning'
    },
    {
      id: 4,
      name: 'Peter Meggik',
      dueDate: 'May 15, 2015',
      progress: 50,
      status: 'primary'
    },
    {
      id: 5,
      name: 'Edward',
      dueDate: 'May 03, 2015',
      progress: 35,
      status: 'danger'
    },
    {
      id: 6,
      name: 'Ronald',
      dueDate: 'Jun 05, 2015',
      progress: 65,
      status: 'info'
    }
  ]
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      }
    }
  }
});

export const { addProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
