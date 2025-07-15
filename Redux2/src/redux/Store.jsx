import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from './TodoListSlice';
import ticketReducer from './ticketSlice';
import projectReducer from './projectSlice';
import chartReducer from './chartSlice';
const store = configureStore({
  reducer: {
    items: TodoListReducer,
    tickets: ticketReducer, 
    charts: chartReducer,
    projects: projectReducer,
  },
});

export default store;
