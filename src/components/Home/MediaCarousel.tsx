import { Movie } from '../../types';
import { MediaCard } from './MediaCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface MediaCarouselProps {
  title: string;
  items: Movie[];
}

export const MediaCarousel = ({ title, items }: MediaCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-4"
      >
        {items.map((item) => (
          <div key={item.id} className="flex-none w-40 sm:w-48 md:w-56 snap-start">
            <MediaCard media={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
