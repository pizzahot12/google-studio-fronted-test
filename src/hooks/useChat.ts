import { useState, useEffect } from 'react';
import { Message } from '../types';
import { supabase } from '../lib/supabase';

export const useChat = (roomId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!roomId) return;

    // Subscribe to messages
    const channel = supabase
      .channel(`room:${roomId}`)
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'messages',
        filter: `room_id=eq.${roomId}`
      }, (payload) => {
        setMessages((prev) => [...prev, payload.new as Message]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId]);

  const sendMessage = async (text: string, userId: string, userName: string) => {
    const { error } = await supabase
      .from('messages')
      .insert({
        room_id: roomId,
        user_id: userId,
        user_name: userName,
        text,
      });
    
    if (error) console.error('Error sending message:', error);
  };

  return { messages, sendMessage };
};
