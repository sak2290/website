import React from 'react';
import Section from './Section';
import type { NewsItem } from '../types';

interface NewsProps {
  newsItems: NewsItem[];
}

const News: React.FC<NewsProps> = ({ newsItems }) => {
  return (
    <Section id="news" title="Recent News" className="bg-white">
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 pb-4">
            <p className="font-bold text-gray-600 md:w-1/4 mb-1 md:mb-0">{item.date}</p>
            <p className="text-gray-700 md:w-3/4">{item.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default News;
