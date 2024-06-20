import Link from "next/link";
export default async function post({params})
{
    const post = await getPostsData(params.id)

    return (
        <><div className="post">
            {post ?
                <><h3>Post #{post.id}: {post.title}</h3>
                    <p>{post.body}</p></>
                : "Loading ..."}
        </div>
            <Link href="/posts">All Posts</Link></>
    )
} // ++ Try adding Next Post and Previous Post links


async function getPostsData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/' +
        'posts/' + id);
    if (!res.ok) { // Recommendation: handle errors
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch posts')
    }
    return res.json()
}