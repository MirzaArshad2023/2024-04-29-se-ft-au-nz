import './App.css'
import Movie from './Movie';
import { useState } from 'react';

function MoviesList() {
    // collection of objects representing movies
    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: 3,
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];

    const [currentMovies, setCurrentMovies] = useState(movies)

    function AddMovie(movieTitle, movieYear, movieSynonpsis)
    {
        //alert(movieTitle)
        movies.push({id:4, title: movieTitle, year: movieYear, synopsis: movieSynonpsis})
        setCurrentMovies(movies)
    }
    function ReverseMovies()
    {
       let newMovies = [...currentMovies]
       newMovies.reverse()
       setCurrentMovies(newMovies)
    }
    const movieItems = currentMovies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis}></Movie>)
    return (
        <div className="MoviesList componentBox">
            <ul> 
                {movieItems}
            </ul>
            <div>
                <button onClick={()=> AddMovie("Titanic", 1999, "Ship that sank")}>Add Movie</button>
            </div>
            <div>
                <button onClick={()=> ReverseMovies()}>Reverse</button>
            </div>
        </div>
    )
}
export default MoviesList;