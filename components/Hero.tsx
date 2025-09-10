
import React from 'react';
import type { Profile } from '../types';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="hero" className="bg-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center max-w-5xl">
        <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            {profile.title}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {profile.affiliation}
          </p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto md:mx-0">
            {profile.bio}
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profile.profilePicture}
            alt={profile.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
