import { create } from 'zustand';

export type BackendUser = {
  userId: string
  name: string;
  email: string;
  role: 'free' | 'premium' | 'enterprise'; 
};

type UserStore = {
  backendUser: BackendUser | null;
  setBackendUser: (user: BackendUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  backendUser: null,
  setBackendUser: (user) => set({ backendUser: user }),
}));
