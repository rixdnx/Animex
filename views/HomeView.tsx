
import React from 'react';
import { MOCK_ANIMES, GENRES } from '../constants';
import { SearchIcon, MenuIcon, ChevronRightIcon } from '../components/Icons';
import { Anime } from '../types';

interface HomeViewProps {
  onAnimeClick: (anime: Anime) => void;
  onSeeMoreGenre: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onAnimeClick, onSeeMoreGenre }) => {
  const featured = MOCK_ANIMES[0];
  const continueWatching = MOCK_ANIMES.filter(a => a.progress !== undefined);
  const onShow = MOCK_ANIMES.slice(2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="px-5 pt-6 flex items-center gap-4">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <MenuIcon className="w-6 h-6 text-zinc-400" />
        </button>
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#1e1e26] border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-red-500/50 outline-none placeholder:text-zinc-600"
          />
        </div>
        <img 
          src="https://picsum.photos/seed/user/100/100" 
          alt="Avatar" 
          className="w-9 h-9 rounded-full border border-white/10"
        />
      </header>

      {/* Featured Banner */}
      <section className="px-5">
        <div 
          onClick={() => onAnimeClick(featured)}
          className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-pointer"
        >
          <img 
            src={featured.banner || featured.image} 
            alt={featured.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <h2 className="text-xl font-bold text-white drop-shadow-lg">{featured.title}</h2>
            <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 px-3 py-1 rounded-full text-red-500 font-bold text-xs">
              {featured.rating}
            </div>
          </div>
        </div>
      </section>

      {/* Genre Section */}
      <section className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-zinc-100">Genre</h3>
          <button onClick={onSeeMoreGenre} className="p-1">
            <ChevronRightIcon className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {GENRES.map(genre => (
            <button 
              key={genre} 
              className="px-4 py-1.5 rounded-full bg-[#1e1e26] text-xs text-zinc-400 hover:text-white hover:bg-red-500 transition-all whitespace-nowrap"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Continue Watching */}
      <section className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-zinc-100">Continue Watching</h3>
          <ChevronRightIcon className="w-5 h-5 text-zinc-500" />
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {continueWatching.map(anime => (
            <div 
              key={anime.id} 
              onClick={() => onAnimeClick(anime)}
              className="flex-shrink-0 w-64 bg-[#18181f] rounded-xl overflow-hidden flex gap-3 p-2 cursor-pointer border border-white/5 hover:border-white/10"
            >
              <img src={anime.image} className="w-16 h-20 rounded-lg object-cover" />
              <div className="flex-1 flex flex-col justify-center gap-1">
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">Episode {anime.currentEpisode}</p>
                <h4 className="text-xs font-semibold text-zinc-100 line-clamp-1">{anime.title}</h4>
                <div className="mt-1">
                  <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full" style={{ width: `${anime.progress}%` }} />
                  </div>
                  <p className="text-[9px] text-zinc-500 mt-1">18:06/23:43</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* On Show Section */}
      <section className="px-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-zinc-100">On Show</h3>
          <ChevronRightIcon className="w-5 h-5 text-zinc-500" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {onShow.map(anime => (
            <div key={anime.id} onClick={() => onAnimeClick(anime)} className="space-y-2 cursor-pointer group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <img 
                  src={anime.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-sm rounded-md px-1 py-0.5 text-[8px] text-white">
                  Ep {anime.episodes}
                </div>
              </div>
              <p className="text-[11px] font-medium text-zinc-300 line-clamp-1 group-hover:text-white">{anime.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;
