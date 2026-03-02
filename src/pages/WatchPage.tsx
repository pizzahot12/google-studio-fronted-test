import { useParams } from 'react-router-dom';
import { MOCK_MOVIES } from '../constants';
import { Send, Users, Copy, LogOut, Settings, MessageSquare, Shield, UserMinus } from 'lucide-react';
import { Button } from '../components/Common/Button';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export const WatchPage = () => {
  const { roomId } = useParams();
  const movie = MOCK_MOVIES.find(m => m.id === roomId);
  const [showChat, setShowChat] = useState(true);
  const [message, setMessage] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'],
        settings: ['quality', 'speed', 'loop'],
      });
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  if (!movie) return <div>Room not found</div>;

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col lg:flex-row overflow-hidden">
      {/* Video Section */}
      <div className="flex-1 relative flex flex-col bg-black">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <LogOut className="w-6 h-6 rotate-180" />
            </button>
            <div>
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-xs text-white/60">Watching with 3 others</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/10 border border-white/10 rounded-xl px-4 py-2 gap-3">
              <span className="text-sm font-mono font-bold text-brand tracking-widest">ABC123</span>
              <button className="p-1 hover:text-brand transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <Button variant="secondary" className="gap-2">
              <Users className="w-4 h-4" /> Invite
            </Button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <video 
            ref={videoRef} 
            className="w-full h-full" 
            playsInline 
            controls 
            poster={movie.backdrop}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Mobile Chat Toggle */}
        <button 
          onClick={() => setShowChat(!showChat)}
          className="lg:hidden absolute bottom-20 right-6 w-12 h-12 bg-brand rounded-full flex items-center justify-center shadow-xl z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Section */}
      <AnimatePresence>
        {showChat && (
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-full lg:w-[400px] h-full bg-bg-dark border-l border-white/10 flex flex-col"
          >
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button className="flex-1 py-4 text-sm font-bold border-b-2 border-brand">Chat</button>
              <button className="flex-1 py-4 text-sm font-bold text-white/40 hover:text-white transition-colors">Participants (4)</button>
              <button className="flex-1 py-4 text-sm font-bold text-white/40 hover:text-white transition-colors">Settings</button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Host" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                  <span className="text-xs font-bold text-brand">Host (You)</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-sm">
                  Welcome everyone! Ready to start?
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white/60">Sarah</span>
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-brand/20 p-3 rounded-2xl rounded-tr-none text-sm">
                  Yes! I've been waiting for this movie.
                </div>
              </div>

              <div className="text-center py-2">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Sarah joined the room</span>
              </div>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); setMessage(''); }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 focus-within:border-brand transition-colors"
              >
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-white/30"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="p-2 text-brand hover:scale-110 transition-transform">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
