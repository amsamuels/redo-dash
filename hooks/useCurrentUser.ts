import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import { useUserStore, BackendUser } from '@/store/user';

export function useCurrentUser(flow: string | null | undefined) {
  const { user, error, isLoading } = useUser();
  const [loading, setLoading] = useState(true);
  const { backendUser, setBackendUser } = useUserStore();

  useEffect(() => {
    const fetchBackendUser = async () => {
      if (user && !backendUser) {
        try {
          let fetchOptions: RequestInit = {
            method: 'GET',
          };

          if (flow === 'signup') {
            fetchOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                auth0_sub: user.sub,
              }),
            };
          }

          const response = await fetch('/api/user', fetchOptions);

          if (!response.ok) {
            console.error(`Failed to ${flow === 'signup' ? 'create' : 'fetch'} user`);
          } 
          
          const data: BackendUser = await response.json();
          setBackendUser(data);
        } catch (error) {
          console.error('Error fetching backend user:', error);
        }
      }

      setLoading(false);
    };

    if (!isLoading) {
      fetchBackendUser();
    }
  }, [user, isLoading, backendUser, setBackendUser, flow]);

  return {
    user,
    backendUser,
    loading: isLoading || loading,
    error,
  };
}
