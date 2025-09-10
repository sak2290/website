import React, { useRef, useState, useEffect } from 'react';
import Section from './Section';
import type { Publication } from '../types';
import { LinkIcon, PdfIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

interface PublicationsProps {
  publications: Publication[];
}

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="flex-shrink-0 w-64 md:w-72 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col overflow-hidden border border-gray-200 snap-start">
    <div className="w-full aspect-[8.5/11] bg-gray-100">
      <img 
        src={pub.thumbnail} 
        alt={`Thumbnail for ${pub.title}`} 
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-bold text-gray-800 text-base mb-1 leading-tight">{pub.title}</h3>
      <p className="text-sm text-gray-600 italic mb-3">{pub.authors.join(', ')}</p>
      <div className="mt-auto">
        <p className="text-xs text-gray-500 mb-3">
          {pub.journal}, {pub.year}
        </p>
        <div className="flex space-x-4 items-center pt-2 border-t border-gray-100">
          {pub.link && (
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold" title="Link to publication">
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
          {pub.pdfLink && (
            <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold" title="Download PDF">
              <PdfIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);


const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = scrollContainer.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1); // -1 for precision
    }
  };

  useEffect(() => {
    const el = scrollContainer.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      }
    };
  }, [publications]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.8;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section id="publications" title="Publications" className="bg-white">
      <div className="relative">
        <div 
            ref={scrollContainer}
            className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory"
            // FIX: Changed '-ms-overflow-style' to 'msOverflowStyle' to match React's camelCase syntax for CSS properties.
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {publications.map((pub, index) => (
            <PublicationItem key={index} pub={pub} />
          ))}
        </div>
        
        {canScrollLeft && (
          <button 
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-opacity z-10"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}
        
        {canScrollRight && (
          <button 
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-opacity z-10"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </Section>
  );
};

export default Publications;