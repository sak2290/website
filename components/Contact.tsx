import React from 'react';
import Section from './Section';
import { GoogleScholarIcon, LinkedInIcon, TwitterIcon, MailIcon } from './icons/Icons';

interface ContactProps {
  email: string;
  links: {
    googleScholar: string;
    linkedIn: string;

    twitter: string;
  };
}

const Contact: React.FC<ContactProps> = ({ email, links }) => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-white">
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new research ideas, collaborations, or opportunities. Feel free to reach out.
        </p>
        
        <a href={`mailto:${email}`} className="inline-flex items-center justify-center bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg mb-10">
          <MailIcon className="w-6 h-6 mr-3" />
          Say Hello
        </a>
        
        <div className="flex justify-center space-x-8">
          <a href={links.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold transition-colors" title="Google Scholar">
            <GoogleScholarIcon className="w-8 h-8" />
          </a>
          {/* FIX: Corrected property access from `links.linkedin` to `links.linkedIn` to match the interface. */}
          <a href={links.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold transition-colors" title="LinkedIn">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold transition-colors" title="Twitter/X">
            <TwitterIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;