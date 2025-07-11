import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'WD-12345',
    assignee: 'David Grey',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    subject: 'Fund is not recieved',
    status: 'DONE',
    updated: 'Dec 5, 2017',
  },
  {
    id: 'WD-12346',
    assignee: 'Stella Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    subject: 'High loading time',
    status: 'PROGRESS',
    updated: 'Dec 12, 2017',
  },
  {
    id: 'WD-12347',
    assignee: 'Marina Michel',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
    subject: 'Website down for one week',
    status: 'ON HOLD',
    updated: 'Dec 16, 2017',
  },
  {
    id: 'WD-12348',
    assignee: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    subject: 'Loosing control on server',
    status: 'REJECTED',
    updated: 'Dec 3, 2017',
  },
];

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
});

export default ticketSlice.reducer;
