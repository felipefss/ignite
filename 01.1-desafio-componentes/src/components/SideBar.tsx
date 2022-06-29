import { useEffect, useState } from 'react';
import { Button } from './Button';

import { GenreResponseProps } from '../App';

import { api } from '../services/api';

import '../styles/sidebar.scss';

interface SideBarProps {
  onSelectGenre: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ onSelectGenre, selectedGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}