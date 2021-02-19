import MovieContext from "../context/MovieContext"
import MovieItem from "./MovieItem";
import {useContext} from "react";


const MovieList = () => {
    const {movies, deleteMovie} = useContext(MovieContext);

    return (
        <section className="movie-list-continer">
            {movies.map((movie)=>(<MovieItem key={movie.id} id={movie.id}  onDeleteMovie={deleteMovie} title={movie.title} description={movie.description}  />))}
        </section>

    )
}

export default MovieList
