import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_MOVIES } from '../constants';
import { Star, Clock, Calendar, Play, Users, Plus, ChevronDown } from 'lucide-react';
import { Button } from '../components/Common/Button';
import { motion } from 'motion/react';
import { useState } from 'react';

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOCK_MOVIES.find(m => m.id === id);
  const [selectedSeason, setSelectedSeason] = useState(1);

  if (!movie) return <div>Movie not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative -m-6 md:-m-10 min-h-screen pb-20"
    >
      {/* Backdrop */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] overflow-hidden">
        <img 
          src={movie.backdrop} 
          alt={movie.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-bg-dark/20" />
      </div>

      {/* Content */}
      <div className="relative pt-[40vh] px-6 md:px-16 flex flex-col md:flex-row gap-12">
        {/* Poster */}
        <div className="hidden md:block w-72 flex-none">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-8 max-w-3xl">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-brand">
                <Star className="w-5 h-5 fill-brand" />
                <span className="text-lg font-bold">{movie.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-4 h-4" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex gap-2">
                {movie.genres.map(g => (
                  <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{g}</span>
                ))}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{movie.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              {movie.synopsis}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 h-14 px-8" onClick={() => navigate(`/watch/${movie.id}`)}>
                <Play className="w-6 h-6 fill-white" /> Create Private Room
              </Button>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 h-14">
                <input 
                  type="text" 
                  placeholder="Enter 6-digit code" 
                  className="bg-transparent border-none outline-none text-sm w-32 placeholder:text-white/30"
                />
                <Button variant="ghost" size="sm" className="ml-2">Join Room</Button>
              </div>
            </div>
          </div>

          {/* Cast */}
          <div>
            <h3 className="text-xl font-bold mb-6">Cast</h3>
            <div className="flex flex-wrap gap-6">
              {movie.cast.map(person => (
                <div key={person.name} className="flex items-center gap-3">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`} 
                    alt={person.name}
                    className="w-12 h-12 rounded-full border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-sm font-bold">{person.name}</p>
                    <p className="text-xs text-white/40">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Series Episodes */}
          {movie.type === 'series' && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Episodes</h3>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
                  Season {selectedSeason} <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(ep => (
                  <div key={ep} className="flex gap-4 p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-32 aspect-video rounded-lg overflow-hidden flex-none relative">
                      <img 
                        src={movie.backdrop} 
                        alt={`Episode ${ep}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-6 h-6 fill-white text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-brand font-bold mb-1">Episode {ep}</p>
                      <p className="text-sm font-bold line-clamp-1">The Journey Begins</p>
                      <p className="text-xs text-white/40 mt-1">54 min</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
