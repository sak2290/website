import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-brand-dark mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;