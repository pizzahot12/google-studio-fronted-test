import { HeroCarousel } from '../components/Home/HeroCarousel';
import { MediaCarousel } from '../components/Home/MediaCarousel';
import { MOCK_MOVIES } from '../constants';
import { motion } from 'motion/react';

export const HomePage = () => {
  const movies = MOCK_MOVIES.filter(m => m.type === 'movie');
  const series = MOCK_MOVIES.filter(m => m.type === 'series');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-12 pb-20"
    >
      <HeroCarousel items={MOCK_MOVIES.slice(0, 3)} />

      <section className="flex flex-col gap-10">
        <MediaCarousel title="Continue Watching" items={MOCK_MOVIES.slice(0, 2)} />
        <MediaCarousel title="Popular Movies" items={movies} />
        <MediaCarousel title="Trending Series" items={series} />
        <MediaCarousel title="Top Rated" items={[...MOCK_MOVIES].reverse()} />
      </section>
    </motion.div>
  );
};
