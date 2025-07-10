import { configureStore } from '@reduxjs/toolkit';
import statsReducer from '../features/stats/statsSlice';
import ticketsReducer from '../features/tickets/ticketsSlice';
import updatesReducer from '../features/updates/updatesSlice';
import todosReducer from '../features/todos/todosSlice';
import projectsReducer from '../features/projects/projectsSlice';

export const store = configureStore({
  reducer: {
    stats: statsReducer,
    tickets: ticketsReducer,
    updates: updatesReducer,
    todos: todosReducer,
    projects: projectsReducer,
  },
});