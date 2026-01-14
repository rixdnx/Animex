
import React, { useState, useEffect } from 'react';
import { AppView, Anime, AppState } from './types';
import { HomeIcon, CalendarIcon, LibraryIcon, DownloadIcon } from './components/Icons';
import HomeView from './views/HomeView';
import GenreView from './views/GenreView';
import DetailView from './views/DetailView';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentView: 'home',
  });

  const navigateTo = (view: AppView, payload?: Partial<AppState>) => {
    setState(prev => ({
      ...prev,
      currentView: view,
      ...payload
    }));
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (state.currentView) {
      case 'home':
        return <HomeView 
          onAnimeClick={(anime) => navigateTo('details', { selectedAnime: anime })} 
          onSeeMoreGenre={() => navigateTo('genre')}
        />;
      case 'genre':
        return <GenreView 
          onBack={() => navigateTo('home')} 
          onAnimeClick={(anime) => navigateTo('details', { selectedAnime: anime })} 
        />;
      case 'details':
        return state.selectedAnime ? (
          <DetailView 
            anime={state.selectedAnime} 
            onBack={() => navigateTo('home')} 
          />
        ) : <HomeView onAnimeClick={(anime) => navigateTo('details', { selectedAnime: anime })} onSeeMoreGenre={() => navigateTo('genre')} />;
      default:
        return <div className="p-8 text-center text-zinc-500">Feature Coming Soon</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-[#0f0f13] shadow-2xl">
      {/* Content Area */}
      <main className="flex-1 pb-24">
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#18181f]/95 backdrop-blur-md border-t border-white/5 flex items-center justify-around py-3 px-6 z-50">
        <NavButton 
          active={state.currentView === 'home'} 
          onClick={() => navigateTo('home')} 
          icon={<HomeIcon />} 
          label="Home" 
        />
        <NavButton 
          active={state.currentView === 'schedule'} 
          onClick={() => navigateTo('schedule')} 
          icon={<CalendarIcon />} 
          label="Jadwal" 
        />
        <NavButton 
          active={state.currentView === 'library'} 
          onClick={() => navigateTo('library')} 
          icon={<LibraryIcon />} 
          label="Library" 
        />
        <NavButton 
          active={state.currentView === 'download'} 
          onClick={() => navigateTo('download')} 
          icon={<DownloadIcon />} 
          label="Download" 
        />
      </nav>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-red-500' : 'text-zinc-500'}`}
  >
    <div className="text-current scale-90">
      {icon}
    </div>
    <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
  </button>
);

export default App;
