import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';



const API_URL = 'http://www.omdbapi.com?apikey=41b9b647';

const movie1 = {

        "Title": "Discount Spiderman 2",
        "Year": "2018",
        "imdbID": "tt9146610",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2U4NjY2YTQtZDFiYS00YTk2LTk5NDItMWVlNmIwZjYyZmE5XkEyXkFqcGc@._V1_SX300.jpg"
    };


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <dive className="app">
            <h1>MovieApp</h1>

            <dive className="search">
                <input 
                placeholder="what are you looking for...?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </dive>

            {
                movies?.length > 0
                ? (
                    <dive className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </dive>
                ) : (
                    <dive className="empty">
                        <h2>No movies found</h2>
                    </dive>
                )
            }


        </dive>

    );
}

export default App;
