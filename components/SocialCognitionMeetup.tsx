import React from 'react';
import Section from './Section';

const SocialCognitionMeetup: React.FC = () => {
  return (
    <Section id="social-cognition-meetup" title="Social Cognition Meetup">
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          I am a co-organizer of the Social Cognition Meetup, an international network dedicated to connecting early-career researchers in the field. We facilitate virtual talks, workshops, and networking events to foster community and collaboration.
        </p>
        <a 
          href="#" // This will eventually link to the meetup page
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg"
        >
          Learn More
        </a>
      </div>
    </Section>
  );
};

export default SocialCognitionMeetup;
