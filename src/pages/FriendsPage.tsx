import { motion } from 'motion/react';
import { Card } from '../components/Common/Card';
import { Button } from '../components/Common/Button';
import { UserPlus, MessageSquare, Play, Search } from 'lucide-react';

const MOCK_FRIENDS = [
  { id: '1', name: 'Sarah Miller', avatar: 'Sarah', status: 'Watching Interstellar', isOnline: true },
  { id: '2', name: 'Alex Thompson', avatar: 'Alex', status: 'Online', isOnline: true },
  { id: '3', name: 'David Chen', avatar: 'David', status: 'Offline', isOnline: false },
  { id: '4', name: 'Emily Wilson', avatar: 'Emily', status: 'Watching The Last of Us', isOnline: true },
];

export const FriendsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Friends</h1>
          <p className="text-white/50">Manage your watch party circle</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            <Search className="w-4 h-4 text-white/40 mr-2" />
            <input 
              type="text" 
              placeholder="Search friends..." 
              className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-white/30"
            />
          </div>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" /> Add Friend
          </Button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-white/10">
        <button className="px-4 py-3 text-sm font-bold border-b-2 border-brand">All Friends</button>
        <button className="px-4 py-3 text-sm font-bold text-white/40 hover:text-white transition-colors">Online (3)</button>
        <button className="px-4 py-3 text-sm font-bold text-white/40 hover:text-white transition-colors">Pending</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_FRIENDS.map((friend) => (
          <Card key={friend.id} className="p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.avatar}`} 
                  alt={friend.name}
                  className="w-14 h-14 rounded-full border-2 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-bg-card ${friend.isOnline ? 'bg-green-500' : 'bg-white/20'}`} />
              </div>
              <div>
                <h3 className="font-bold">{friend.name}</h3>
                <p className={`text-xs ${friend.status.includes('Watching') ? 'text-brand font-medium' : 'text-white/40'}`}>
                  {friend.status}
                </p>
              </div>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {friend.status.includes('Watching') && (
                <button className="p-2 bg-brand/20 text-brand rounded-lg hover:bg-brand hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </button>
              )}
              <button className="p-2 bg-white/5 text-white/60 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
