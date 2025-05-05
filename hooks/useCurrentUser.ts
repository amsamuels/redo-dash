import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import { useUserStore, BackendUser } from '@/store/user';

export function useCurrentUser() {
  const { user, error, isLoading } = useUser();
  const [loading, setLoading] = useState(true);
  const { backendUser, setBackendUser } = useUserStore();

  useEffect(() => {
    const fetchBackendUser = async () => {
      if (user && !backendUser) {
        try {
          const response = await fetch('/api/user');
          if (response.ok) {
            const data: BackendUser = await response.json();
            setBackendUser(data);
          }
        } catch (error) {
          console.error('Error fetching backend user:', error);
        }
      }
      setLoading(false);
    };

    if (!isLoading) {
      fetchBackendUser();
    }
  }, [user, isLoading, backendUser, setBackendUser]);

  return {
    user,
    backendUser,
    loading: isLoading || loading,
    error,
  };
}