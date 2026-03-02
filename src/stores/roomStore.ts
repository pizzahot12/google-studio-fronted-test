import { create } from 'zustand';
import { Room, VideoState } from '../types';

interface RoomState {
  currentRoom: Room | null;
  videoState: VideoState;
  setRoom: (room: Room) => void;
  updateVideoState: (state: Partial<VideoState>) => void;
  clearRoom: () => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  currentRoom: null,
  videoState: {
    playing: false,
    currentTime: 0,
    duration: 0,
    quality: '720p',
  },
  setRoom: (room) => set({ currentRoom: room }),
  updateVideoState: (state) => set((prev) => ({ 
    videoState: { ...prev.videoState, ...state } 
  })),
  clearRoom: () => set({ currentRoom: null }),
}));
