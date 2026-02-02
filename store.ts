
import { useState, useEffect, useContext, createContext } from 'react';
import { SiteData } from './types';
import { INITIAL_SITE_DATA, ADMIN_USERNAME, ADMIN_PASSWORD } from './constants';

const STORAGE_KEY = 'MSPJ_SITE_DATA';
const AUTH_KEY = 'MSPJ_AUTH_TOKEN'; // Changed to AUTH_KEY

export const useCMS = () => {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_SITE_DATA;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateSettings = (settings: SiteData['settings']) => {
    setData(prev => ({ ...prev, settings }));
  };

  const addPost = (post: SiteData['posts'][0]) => {
    setData(prev => ({ ...prev, posts: [post, ...prev.posts] }));
  };

  const deletePost = (id: string) => {
    setData(prev => ({ ...prev, posts: prev.posts.filter(p => p.id !== id) }));
  };

  const updateCourses = (courses: SiteData['courses']) => {
    setData(prev => ({ ...prev, courses }));
  };

  const resetData = () => {
    setData(INITIAL_SITE_DATA);
  };

  return {
    data,
    updateSettings,
    addPost,
    deletePost,
    updateCourses,
    resetData
  };
};

// Auth Context & Hook
interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const token = localStorage.getItem(AUTH_KEY);
    return !!token; // Check if token exists
  });

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true'); // Simple token for client-side auth
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
