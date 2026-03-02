import { Movie } from '../../types';
import { Play, Info, Plus } from 'lucide-react';
import { Button } from '../Common/Button';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface HeroCarouselProps {
  items: Movie[];
}

export const HeroCarousel = ({ items }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[currentIndex];

  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={current.backdrop} 
            alt={current.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-brand text-white text-xs font-bold rounded uppercase tracking-widest">Featured</span>
                <span className="text-white/60 text-sm font-medium">{current.year} • {current.duration}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{current.title}</h1>
              <p className="text-lg text-white/70 line-clamp-3 mb-8 leading-relaxed">
                {current.synopsis}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 shadow-xl shadow-brand/20">
                  <Play className="w-5 h-5 fill-white" /> Watch Now
                </Button>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Plus className="w-5 h-5" /> Add to List
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Info className="w-5 h-5" /> More Info
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-full",
              idx === currentIndex ? "w-8 bg-brand" : "w-2 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
};
