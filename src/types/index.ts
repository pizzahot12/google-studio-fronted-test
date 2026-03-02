export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  duration: string;
  synopsis: string;
  genres: string[];
  cast: { name: string; role: string; avatar?: string }[];
  type: 'movie' | 'series';
}

export interface Episode {
  id: string;
  title: string;
  number: number;
  season: number;
  duration: string;
  thumbnail: string;
}

export interface Room {
  id: string;
  code: string;
  mediaId: string;
  hostId: string;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isWatching: boolean;
  isHost: boolean;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: string;
}

export interface VideoState {
  playing: boolean;
  currentTime: number;
  duration: number;
  quality: string;
}
