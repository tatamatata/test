import { useEffect, useRef, useState } from 'react';
import type { Coach } from '../types';

export function useInfiniteScroll(initialCoaches: Coach[]) {
  const [coaches, setCoaches] = useState<Coach[]>(initialCoaches);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1);
  const observerRef = useRef<IntersectionObserver>();
  const loadingRef = useRef<HTMLDivElement>(null);

  const loadMoreCoaches = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate new coaches data
      const newCoaches: Coach[] = [
        {
          id: `${Date.now()}-1`,
          name: 'Carmen Rodriguez',
          title: 'Business & Innovation Expert',
          expertise: ['Business', 'Innovation', 'Entrepreneurship'],
          rating: 4.7,
          reviewCount: 89,
          imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
          shortBio: 'Specializing in business innovation visas with 10+ years experience',
          hourlyRate: 160,
          languages: ['English', 'Spanish'],
        },
        {
          id: `${Date.now()}-2`,
          name: 'David Chen',
          title: 'Digital Skills Specialist',
          expertise: ['Digital', 'Tech', 'AI'],
          rating: 4.9,
          reviewCount: 76,
          imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
          shortBio: 'Former tech industry professional helping talents secure UK visas',
          hourlyRate: 145,
          languages: ['English', 'Mandarin', 'Cantonese'],
        },
      ];

      // Simulate end of data after 5 pages
      if (pageRef.current >= 5) {
        setHasMore(false);
        return;
      }

      setCoaches(prev => [...prev, ...newCoaches]);
      pageRef.current += 1;
    } catch (err) {
      setError('Failed to load more coaches. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        loadMoreCoaches();
      }
    }, options);

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading]);

  return {
    coaches,
    loading,
    error,
    hasMore,
    loadingRef,
  };
}