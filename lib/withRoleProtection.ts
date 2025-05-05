import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type AllowedRoles = 'free' | 'premium' | 'enterprise';

export function withRoleProtection(
  WrappedComponent: React.ComponentType,
  allowedRoles: AllowedRoles[]
) {
  return function ProtectedRoute(props: any) {
    const { user, backendUser, loading } = useCurrentUser();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || !backendUser)) {
        router.push('/api/auth/login');
      } else if (!loading && backendUser && !allowedRoles.includes(backendUser.role)) {
        router.push('/dashboard');
      }
    }, [user, backendUser, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user || !backendUser) {
      return null;
    }

    if (!allowedRoles.includes(backendUser.role)) {
      return <div>Access denied. Insufficient permissions.</div>;
    }

    return <WrappedComponent {...props} />;
  };
}