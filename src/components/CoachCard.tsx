import React from 'react';
import { Star, ChevronRight, Globe2 } from 'lucide-react';
import type { Coach } from '../types';

interface CoachCardProps {
  coach: Coach;
}

export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={coach.imageUrl}
            alt={coach.name}
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{coach.name}</h3>
            <p className="text-sm text-gray-600">{coach.title}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{coach.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({coach.reviewCount} reviews)</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm">{coach.shortBio}</p>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Globe2 className="h-4 w-4 mr-1" />
          <span>{coach.languages.join(', ')}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">£{coach.hourlyRate}/hour</span>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            View Profile
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}