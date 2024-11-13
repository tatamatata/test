import React from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import CoachCard from './CoachCard';
import type { Coach } from '../types';

const initialCoaches: Coach[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    title: 'Tech & Digital Visa Specialist',
    expertise: ['Tech', 'Digital', 'Startups'],
    rating: 4.9,
    reviewCount: 127,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    shortBio: 'Former Tech Talent Assessor with 8+ years of experience in UK visa applications',
    hourlyRate: 150,
    languages: ['English', 'Mandarin'],
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    title: 'Arts & Culture Visa Expert',
    expertise: ['Arts', 'Culture', 'Media'],
    rating: 4.8,
    reviewCount: 93,
    imageUrl: 'https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    shortBio: 'Specializing in exceptional talent visas for artists and cultural professionals',
    hourlyRate: 125,
    languages: ['English', 'French', 'Spanish'],
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    title: 'Academic & Research Specialist',
    expertise: ['Academia', 'Research', 'Science'],
    rating: 5.0,
    reviewCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    shortBio: 'PhD in International Education with expertise in research visas',
    hourlyRate: 140,
    languages: ['English', 'Hindi', 'Bengali'],
  }
];

export default function FeaturedCoaches() {
  const { coaches, loading, error, hasMore, loadingRef } = useInfiniteScroll(initialCoaches);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Top Visa Coaches
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Experienced professionals ready to guide you through your visa journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>

        {/* Loading and Error States */}
        <div ref={loadingRef} className="mt-8 text-center">
          {loading && (
            <div className="flex items-center justify-center space-x-2 text-indigo-600">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading more coaches...</span>
            </div>
          )}
          {error && (
            <div className="text-red-600">
              {error}
              <button 
                className="ml-2 text-indigo-600 hover:text-indigo-700 underline"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          )}
          {!hasMore && !loading && (
            <p className="text-gray-500">You've seen all available coaches!</p>
          )}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition">
              View All Coaches
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}