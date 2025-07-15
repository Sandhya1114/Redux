// src/mirage/server.js
import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
       this.namespace = 'api';
      //  Chart data route
      this.get('/chart-data', () => {
        return {
          salesData: [
            { name: 'Jan', visits: 4000, sales: 2400 },
            { name: 'Feb', visits: 3000, sales: 1398 },
            { name: 'Mar', visits: 2000, sales: 9800 },
            { name: 'Apr', visits: 2780, sales: 3908 },
            { name: 'May', visits: 1890, sales: 4800 },
            { name: 'Jun', visits: 2390, sales: 3800 },
          ],
          trafficData: [
            { name: 'Search Engines', value: 300 },
            { name: 'Direct Click', value: 300 },
            { name: 'Bookmarks Click', value: 400 },
          ],
        };
      });

      // 👇 Project data route
      this.get('/project-data', () => {
        return [
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
        ];
      });

      this.get('/tickets', () => {
        return [
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
        ]
      });

      this.get('/todos', () => {
        return [
          { id: 1, title: 'Task1', completed: false },
          { id: 2, title: 'Task2', completed: true },
          { id: 3, title: 'Task3', completed: false },
          { id: 4, title: 'Task4', completed: true },
          { id: 5, title: 'Task5', completed: false },
        ];
      });
    },
  });

  
}
