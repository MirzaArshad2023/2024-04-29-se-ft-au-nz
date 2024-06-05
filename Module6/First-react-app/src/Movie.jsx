// separate component for displaying each movie
function Movie({ title, year, synopsis }) {
    return (
        <li>
            <h3>{title}</h3> <span>({year})</span>
            <div>{synopsis}</div>
        </li >
    )
}
export default Movie;