import { Outlet, useParams, Link } from "react-router-dom";
import { useData } from "./Hooks/useData";
import { useSearchParams } from "react-router-dom";

// save as pages/PostsPage.jsx
export function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet />
        </div>
    )
}

export function PostList() {
    const [searchParams, setSearchParams] =  useSearchParams()
    let limit = searchParams.get('limit')? searchParams.get('limit') : 5
    const postsData =
        useData('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);

    // the ? means only call map if postsData is not null
    const postList = postsData?.map(post => (
        <li key={post.id}><Link to={"/posts/" + post.id}>
            Post #{post.id}: {post.title}</Link></li>
    ));
    const handleChangeLimit = (e) => {
        setSearchParams({limit: e.target.value})
        }

    return (
        <>
        <ul>{postList}</ul>
            <select defaultValue={5} onChange={handleChangeLimit}>
                <option>5</option>
                <option>10</option>
                <option>50</option>
            </select>
        </>
    )
}

export function Post() {
    const { id } = useParams(); // custom hook to access dynamic params
    const post =
        useData('https://jsonplaceholder.typicode.com/posts/' + id);
    return (
        <div className="Post">
            {post ?
                <><h3>Post #{post.id}: {post.title}</h3>
                    <p>{post.body}</p></>
                : "Loading ..."}
        </div>
    )
}