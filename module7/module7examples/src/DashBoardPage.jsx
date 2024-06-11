import { useNavigate, Outlet } from 'react-router-dom'
import { UserContext } from './UserProvider';
import { useContext } from 'react';
export function DashboardPage() {
    // built-in hook in React Router DOM, returns a function
    const navigate = useNavigate();

    return (
        <div className="DashboardPage componentBox">
            <h1>Dashboard</h1>

            <Outlet /> {/* see next slide */}
            {/* Will render either <DashboardMessages> when the URL is
"/dash/messages", <DashboardTasks> at "/dash/tasks",
or null if it is "/dash" */}

            <button onClick={() => navigate('/dash/tasks')}>
                Show Tasks</button>
            <button onClick={() => navigate('/dash/messages')}>
                Show Messages</button>
            <button onClick={() => navigate(-1)}>
                Back</button>
        </div>
    )
}
// Add this code to DashboardPage.jsx : nested route path components
// rendered by matching nested routes in AppRoutes.jsx
// These components will appear in the <Outlet /> placeholder spot
// in the DashboardPage component if the route matches
export function DashboardMessages(props) {
    const { currentUser } = useContext(UserContext)
    return (
        <div className="DashboardMessages">
            <p>Welcome to your dashboard, {currentUser.email}</p>
        </div>
    )
}
export function DashboardTasks(props) {
    const tasks = [
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'Decide on capstone project' },
        { id: 3, name: 'Learn databases' }
    ]
    return (
        <div className="DashboardTasks">
            <ul className="tasks">
                {tasks.map(task => <li key={task.id}>{task.name}</li>)}
            </ul>
        </div>
    )
}