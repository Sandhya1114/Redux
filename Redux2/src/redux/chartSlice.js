// src/redux/chartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chartSlice = createSlice({
  name: 'charts',
  initialState: {
    salesData: [
       { name: 'Jan', visits: 4000, sales: 2400 },
      { name: 'Feb', visits: 3000, sales: 1398 },
      { name: 'Mar', visits: 2000, sales: 9800 },
      { name: 'Apr', visits: 2780, sales: 3908 },
      { name: 'May', visits: 1890, sales: 4800 },
      { name: 'Jun', visits: 2390, sales: 3800 },
    ],
    trafficData: [
      { name: 'Search Engines ', value: 300 },
      { name: ' Direct Click ', value: 300 },
      { name: ' Bookmarks Click ', value: 400 },
      
    ]
  },
  reducers: {}
});

export default chartSlice.reducer;
