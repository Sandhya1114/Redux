import { createServer, Model } from 'miragejs';

createServer({
  models: {
    todo: Model,
    ticket: Model,
    project: Model,
    sales: Model,
    update: Model,
    traffic: Model,
  },

  seeds(server) {
    // Seed todos
    const todos = [
      { id: '1', title: 'Pick up kids from school', completed: false },
      { id: '2', title: 'Prepare for presentation', completed: true },
      { id: '3', title: 'Print statements', completed: false },
      { id: '4', title: 'Create invoice', completed: false },
      { id: '5', title: 'Call John', completed: true },
      { id: '6', title: 'Meeting with Alice', completed: false },
    ];
    todos.forEach(todo => server.create('todo', todo));

    // Optional: Duplicates with different IDs
    todos.forEach((todo, index) => {
      server.create('todo', {
        ...todo,
        id: `todo-${index + 1}`,
      });
    });

    // Seed tickets
    server.create('ticket', {
      id: 'WD-12345',
      subject: 'Fund is not received',
      status: 'Done',
      lastUpdated: 'Dec 5, 2017',
      assignee: 'David Grey',
    });

    server.create('ticket', {
      id: 'WD-12346',
      subject: 'High loading time',
      status: 'Progress',
      lastUpdated: 'Dec 12, 2017',
      assignee: 'Stella Johnson',
    });
  },

  routes() {
    this.namespace = 'api'; // Optional: group under /api

    this.get('/todos/:id', (schema, request) => {
      const id = request.params.id;
      const todo = schema.todos.find(id);
      return todo ? todo.attrs : {};
    });

    this.post('/todos', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const newTodo = schema.todos.create(attrs);
      return newTodo.attrs;
    });

    this.delete('/todos/:id', (schema, request) => {
      const id = request.params.id;
      const todo = schema.todos.find(id);
      if (todo) {
        todo.destroy();
        return { message: `Todo with id ${id} deleted.` };
      } else {
        return { error: `Todo with id ${id} not found.` };
      }
    });
  },
});
