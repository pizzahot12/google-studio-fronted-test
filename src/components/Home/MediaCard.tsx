import { Movie } from '../../types';
import { Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../Common/Card';

interface MediaCardProps {
  media: Movie;
}

export const MediaCard = ({ media }: MediaCardProps) => {
  return (
    <Link to={`/details/${media.id}`} className="block group">
      <Card className="relative aspect-[2/3] group">
        <img 
          src={media.poster} 
          alt={media.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-1 text-brand mb-1">
            <Star className="w-3 h-3 fill-brand" />
            <span className="text-xs font-bold">{media.rating}</span>
          </div>
          <h3 className="text-sm font-bold text-white line-clamp-1 mb-2">{media.title}</h3>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
            <span className="text-xs font-medium text-white/80">Watch Now</span>
          </div>
        </div>

        {media.type === 'series' && (
          <div className="absolute top-2 right-2 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            Series
          </div>
        )}
      </Card>
    </Link>
  );
};
