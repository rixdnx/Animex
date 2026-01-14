
import React from 'react';
import { Anime } from '../types';
import { ChevronLeftIcon, StarIcon, PlayIcon, DownloadIcon } from '../components/Icons';
import { MOCK_EPISODES } from '../constants';

interface DetailViewProps {
  anime: Anime;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ anime, onBack }) => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-80">
        <img 
          src={anime.banner || anime.image} 
          alt={anime.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/20 to-transparent" />
        <button 
          onClick={onBack}
          className="absolute top-6 left-5 p-2 bg-black/30 backdrop-blur-md rounded-full text-white border border-white/10"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Info Content */}
      <div className="px-5 -mt-16 relative z-10">
        <h1 className="text-2xl font-bold mb-4">{anime.title}</h1>
        
        <div className="flex gap-3 mb-6">
          <div className="bg-[#1e1e26] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <StarIcon className="text-yellow-500" />
            <span className="text-sm font-bold text-zinc-300">{anime.rating}</span>
          </div>
          <div className="bg-[#1e1e26] px-3 py-1.5 rounded-lg">
            <span className="text-sm font-medium text-zinc-400">{anime.episodes} Episode</span>
          </div>
          <div className="bg-[#1e1e26] px-3 py-1.5 rounded-lg">
            <span className="text-sm font-medium text-zinc-400">{anime.year}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {anime.genres.map(genre => (
            <span key={genre} className="text-xs text-zinc-500 font-medium">
              {genre}{genre !== anime.genres[anime.genres.length-1] && ','}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-8">
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            {anime.description}
          </p>
          <button className="text-red-500 text-sm font-bold">Read More</button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <button className="bg-white text-black font-bold py-3.5 rounded-2xl hover:bg-zinc-200 transition-colors">
            Add Library
          </button>
          <button className="bg-[#2a2a35] text-white font-bold py-3.5 rounded-2xl hover:bg-[#323240] transition-colors">
            Download
          </button>
        </div>

        {/* Episodes Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Episode</h3>
          <div className="space-y-4">
            {MOCK_EPISODES.map(ep => (
              <div key={ep.id} className="bg-[#18181f] p-3 rounded-2xl flex items-center gap-4 group cursor-pointer border border-white/5 hover:border-red-500/30 transition-all">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={ep.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayIcon className="w-8 h-8 text-white drop-shadow-xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-zinc-200 mb-1">{ep.title}</h4>
                  <p className="text-[10px] text-zinc-500 mb-0.5">{ep.duration}</p>
                  <button className="text-[10px] text-zinc-400 font-semibold hover:text-white flex items-center gap-1 mt-1">
                    <DownloadIcon className="w-3 h-3" />
                    Download
                  </button>
                </div>
                <button className="text-zinc-500 group-hover:text-red-500 transition-colors">
                  <PlayIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
