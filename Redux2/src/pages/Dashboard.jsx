import { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import ChartBox from '../components/ChartBox';
import '../components/ChartBox.css';
// import CalendarComponent from '../Calendar';
import { fetchProjectData } from '../redux/projectSlice';
import { fetchTickets } from '../redux/ticketSlice';

const Dashboard = () => {
    const dispatch = useDispatch();

    // Redux selectors
    const { projects, loading, error } = useSelector((state) => state.projects);
    const { tickets, loading: ticketLoading, error: ticketError } = useSelector((state) => state.tickets);


    const statusClass = {
        DONE: 'done',
        PROGRESS: 'progress',
        'ON HOLD': 'hold',
        REJECTED: 'rejected',
    };

    useEffect(() => {
        dispatch(fetchProjectData());
        dispatch(fetchTickets());
    }, [dispatch]);

    return (
        <div className="dashboard">

            {/* <CalendarComponent /> */}
            <ChartBox />

           <div className="tickets">
        <h3>Recent Tickets</h3>
        {ticketLoading ? (
          <p>Loading tickets...</p>
        ) : ticketError ? (
          <p>Error: {ticketError}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Assignee</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Last Update</th>
                <th>Tracking ID</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img
                        src={ticket.avatar}
                        alt={ticket.assignee}
                        style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                      />
                      <span>{ticket.assignee}</span>
                    </div>
                  </td>
                  <td>{ticket.subject}</td>
                  <td>
                    <span className={`status ${statusClass[ticket.status]}`}>{ticket.status}</span>
                  </td>
                  <td>{ticket.updated}</td>
                  <td>{ticket.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

            {/* Project Table */}
            <div className="cardtodo">
                <div className="card-body">
                    <h4 className="card-title">Project Status</h4>

                    {loading && <p>Loading projects...</p>}
                    {error && <p className="error">Error: {error}</p>}

                    {!loading && !error && (
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(projects) && projects.map((project, index) => (
                                        <tr key={project.id}>
                                            <td>{index + 1}</td>
                                            <td>{project.name}</td>
                                            <td>{project.dueDate}</td>
                                            <td>
                                                <div className="progress">
                                                    <div
                                                        className={`progress-bar bg-gradient-${project.status}`}
                                                        role="progressbar"
                                                        style={{ width: `${project.progress}%` }}
                                                        aria-valuenow={project.progress}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
                <TodoList />
            </div>
        </div>
    );
};

export default Dashboard;
