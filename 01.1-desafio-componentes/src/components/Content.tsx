import { useEffect, useState } from 'react';

import { MovieCard } from './MovieCard';
import { GenreResponseProps } from '../App';

import { api } from '../services/api';

import '../styles/content.scss';
import { Header } from './Header';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: GenreResponseProps
}

export function Content({ selectedGenre }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const selectedGenreId = selectedGenre.id;

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}