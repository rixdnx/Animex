
import React, { useState } from 'react';
import { GENRES, MOCK_ANIMES } from '../constants';
import { ChevronLeftIcon, MenuIcon } from '../components/Icons';
import { Anime } from '../types';

interface GenreViewProps {
  onBack: () => void;
  onAnimeClick: (anime: Anime) => void;
}

const GenreView: React.FC<GenreViewProps> = ({ onBack, onAnimeClick }) => {
  const [activeGenre, setActiveGenre] = useState(GENRES[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-5 py-6 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/5 rounded-full">
          <ChevronLeftIcon className="w-6 h-6 text-zinc-400" />
        </button>
        <h2 className="text-lg font-bold">Genre</h2>
        <button className="p-2 -mr-2 hover:bg-white/5 rounded-full">
          <MenuIcon className="w-6 h-6 text-zinc-400" />
        </button>
      </header>

      <div className="flex gap-2 overflow-x-auto no-scrollbar px-5 pb-6">
        {GENRES.map(genre => (
          <button 
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeGenre === genre 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'bg-[#1e1e26] text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="px-5 grid grid-cols-2 gap-4">
        {MOCK_ANIMES.concat(MOCK_ANIMES).map((anime, idx) => (
          <div 
            key={`${anime.id}-${idx}`} 
            onClick={() => onAnimeClick(anime)}
            className="bg-[#18181f] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div className="relative aspect-[3/4]">
              <img src={anime.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <span className="text-[10px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-white">
                  {anime.episodes} Episode
                </span>
                <span className="text-[10px] bg-green-600 px-2 py-0.5 rounded-md text-white font-bold">
                  Done
                </span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-center text-zinc-300 line-clamp-1">{anime.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreView;
