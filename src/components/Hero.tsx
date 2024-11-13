import React from 'react';
import { ArrowRight, Award, Users, Clock, Flag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239fa8da' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Flag className="h-6 w-6 text-red-500" />
                <span className="text-white/90 font-medium">UK Global Talent Visa</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Your Journey to</span>
                <span className="block text-indigo-200">UK Success Starts Here</span>
              </h1>
              <p className="mt-6 text-lg text-indigo-100 sm:text-xl max-w-xl">
                Connect with expert visa coaches who understand your dreams and will guide you through every step of your UK Global Talent Visa application.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-900 bg-white hover:bg-indigo-50 transition-all transform hover:scale-105">
                  Find Your Coach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-200 text-base font-medium rounded-lg text-white hover:bg-indigo-800/50 transition-all">
                  How It Works
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Award className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3 className="text-white font-medium">Verified Coaches</h3>
                    <p className="text-indigo-200 text-sm">100% Expert-Vetted</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Users className="h-8 w-8 text-green-400" />
                  <div>
                    <h3 className="text-white font-medium">500+ Success Stories</h3>
                    <p className="text-indigo-200 text-sm">Join Our Community</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="text-white font-medium">Flexible Booking</h3>
                    <p className="text-indigo-200 text-sm">Your Time, Your Terms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Successful professional man"
                  className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Successful professional woman"
                  className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Success story 1" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Success story 2" />
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Success story 3" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Join 500+ Success Stories</p>
                    <p className="text-gray-500">Visa Approved in 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}