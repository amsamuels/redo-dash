import React from 'react';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type AllowedRoles = 'free' | 'premium' | 'enterprise';

export function withRoleProtection(
  WrappedComponent: React.ComponentType,
  allowedRoles: AllowedRoles[] = []
) {
  return function ProtectedRoute(props: any) {
    const { user, backendUser, loading } = useCurrentUser("");
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user || !backendUser) {
          router.push('/api/auth/login');
        } else if (!allowedRoles.includes(backendUser.role)) {
          router.push('/dashboard'); 
        }
      }
    }, [user, backendUser, loading, router]);

    if (loading) return <div>loading...</div>;
    if (!user || !backendUser || !allowedRoles.includes(backendUser.role)) return null;

    return <WrappedComponent {...props} />;
  };
}
