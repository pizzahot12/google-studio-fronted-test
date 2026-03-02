import { Home, Film, Tv, Users, Heart, Clock, PlusCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Film, label: 'Movies', path: '/movies' },
  { icon: Tv, label: 'Series', path: '/series' },
  { icon: Users, label: 'Friends', path: '/friends' },
];

const libraryItems = [
  { icon: Heart, label: 'Favorites', path: '/favorites' },
  { icon: Clock, label: 'Watch Later', path: '/watchlist' },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-bg-dark border-r border-white/5 p-6 hidden lg:flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Menu</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-white/60 hover:text-white hover:bg-white/5'
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Library</p>
        {libraryItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-brand text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group">
          <PlusCircle className="w-5 h-5 text-brand group-hover:scale-110 transition-transform" />
          <span className="font-medium">Create Room</span>
        </button>
      </div>
    </aside>
  );
};
