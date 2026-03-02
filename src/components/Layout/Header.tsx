import { Search, Bell, User, LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../Common/Button';

export const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 glass px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center font-bold text-white">P</div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">PlexParty</span>
        </div>

        <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-80">
          <Search className="w-4 h-4 text-white/40 mr-2" />
          <input 
            type="text" 
            placeholder="Search movies, series..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <Bell className="w-5 h-5 text-white/70" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full border-2 border-bg-dark" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{user?.name || 'Guest'}</p>
            <p className="text-xs text-white/40">Premium</p>
          </div>
          <div className="group relative">
            <img 
              src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'Guest'}`} 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-brand/20 cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-bg-card border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 flex items-center gap-2">
                <User className="w-4 h-4" /> Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <div className="h-px bg-white/10 my-1" />
              <button 
                onClick={logout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 text-red-400 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
