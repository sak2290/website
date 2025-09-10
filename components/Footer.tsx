import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;