// import { createSlice } from '@reduxjs/toolkit';

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ id: Date.now(), text: action.payload });
//     },
//     removeTodo: (state, action) => {
//       return state.filter(todo => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// MirageJS API base (no actual base URL needed since Mirage hijacks fetch)
const API_URL = '/api/todos';

// --- Async Thunks ---

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.todos;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ title: text, completed: false }),
  });
  const data = await response.json();
  return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return id; // We just return the ID to remove it from state
});

// --- Slice ---

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch Todos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add Todo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Delete Todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
