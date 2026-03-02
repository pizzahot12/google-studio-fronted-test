import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { supabase } from '../lib/supabase';
import { User } from '../types';

export const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email!,
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0],
          avatar: session.user.user_metadata.avatar_url,
        };
        login(userData, session.access_token);
      }
      setLoading(false);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email!,
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0],
          avatar: session.user.user_metadata.avatar_url,
        };
        login(userData, session.access_token);
      } else {
        logout();
      }
    });

    return () => subscription.unsubscribe();
  }, [login, logout]);

  return { user, isAuthenticated, loading };
};
