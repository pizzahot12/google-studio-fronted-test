import { Movie } from './types';

export const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1000',
    backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
    rating: 8.7,
    year: 2014,
    duration: '2h 49m',
    synopsis: 'When Earth becomes uninhabitable, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper' },
      { name: 'Anne Hathaway', role: 'Brand' },
      { name: 'Jessica Chastain', role: 'Murph' }
    ],
    type: 'movie'
  },
  {
    id: '2',
    title: 'Dune: Part Two',
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=1000',
    backdrop: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=2000',
    rating: 8.9,
    year: 2024,
    duration: '2h 46m',
    synopsis: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    genres: ['Sci-Fi', 'Action', 'Adventure'],
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides' },
      { name: 'Zendaya', role: 'Chani' },
      { name: 'Austin Butler', role: 'Feyd-Rautha' }
    ],
    type: 'movie'
  },
  {
    id: '3',
    title: 'The Last of Us',
    poster: 'https://images.unsplash.com/photo-1618519764620-7403abdbcdc9?auto=format&fit=crop&q=80&w=1000',
    backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2000',
    rating: 8.8,
    year: 2023,
    duration: '1h',
    synopsis: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
    genres: ['Drama', 'Action', 'Adventure'],
    cast: [
      { name: 'Pedro Pascal', role: 'Joel' },
      { name: 'Bella Ramsey', role: 'Ellie' }
    ],
    type: 'series'
  }
];
