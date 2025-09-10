import React from 'react';
import type { Profile } from '../types';
import { MailIcon, GoogleScholarIcon, TwitterIcon, GraduationCapIcon } from './icons/Icons';

interface AboutProps {
  profile: Profile;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Left Column */}
          <div className="md:col-span-1 text-center flex flex-col items-center">
            <img
              src={profile.profilePicture}
              alt={profile.name}
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
            />
            <h1 className="text-3xl font-bold text-brand-dark">
              {profile.name}
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              {profile.title}
            </p>
            <p className="text-md text-gray-500 mb-4">
              {profile.affiliation}
            </p>
            <div className="flex space-x-4 mb-6">
                <a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-brand-gold" title="Email"><MailIcon className="w-6 h-6" /></a>
                <a href={profile.links.googleScholar} className="text-gray-500 hover:text-brand-gold" title="Google Scholar"><GoogleScholarIcon className="w-6 h-6" /></a>
                <a href={profile.links.twitter} className="text-gray-500 hover:text-brand-gold" title="Twitter/X"><TwitterIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {profile.longBio}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-4">Interests</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                        {profile.interests.map(interest => <li key={interest}>{interest}</li>)}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-4">Education</h2>
                    <ul className="space-y-4">
                        {profile.education.map(edu => (
                            <li key={edu.degree} className="flex items-start">
                                <GraduationCapIcon className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-lg text-gray-800">{edu.degree}</p>
                                    <p className="text-gray-600">{edu.institution}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;