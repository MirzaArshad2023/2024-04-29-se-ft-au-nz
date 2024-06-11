import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import Home from "./Home"
import PageNotFound from "./PageNotFound"
import { DashboardMessages, DashboardTasks, DashboardPage } from "./DashBoardPage"
import { PostList, PostsPage, Post } from "./PostsPage"
import LoginForm from "./LoginForm"
import ProtectedRoute from "./ProtectedRoute"
export default function AppRoutes(props)
{
    return(
        <Routes>
            <Route index element={<Home {...props}></Home>}></Route>
            <Route path="Contact" element={<Contact></Contact>}></Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            <Route path="dash" element={
            <ProtectedRoute>
            <DashboardPage {...props} /></ProtectedRoute>}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path='/posts' element={<ProtectedRoute>
                <PostsPage {...props} /></ProtectedRoute>} >
                <Route index element={<PostList />} />
                {/* dynamic param taken from route, stored in variable called id */}
                <Route path=":id" element={<Post />} />
            </Route>
            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        </Routes>
    )
}