import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching todos (example API endpoint)
export const fetchTodos = createAsyncThunk(
    'api/fetchTodos',
    async () => {
        const response = await fetch('api/todos');
        if(!response.ok){
            throw new Error('failed to fetch items')
        }
        const data = await response.json();
        return data.map(todo => ({
    id: todo.id,
    text: todo.title,
    completed: todo.completed,
  }));
    }
);

const TodoListSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],        // renamed from `data` to `items` for clarity
        status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {
        toggleItem: (state, action) => {
            const item = state.items.find(todo => todo.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        },

        addItem: (state, action) => {
            state.items.push({ id: Date.now(), text: action.payload, completed: false });
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addItem, removeItem, toggleItem } = TodoListSlice.actions;
export default TodoListSlice.reducer;
