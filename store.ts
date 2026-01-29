
import { useState, useEffect } from 'react';
import { SiteData } from './types';
import { INITIAL_SITE_DATA } from './constants';

const STORAGE_KEY = 'MSPJ_SITE_DATA';

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
