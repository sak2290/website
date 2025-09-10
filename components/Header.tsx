import React from 'react';

interface HeaderProps {
  name: string;
  cvLink: string;
}

const Header: React.FC<HeaderProps> = ({ name, cvLink }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'News', href: '#news' },
    { name: 'Social Cognition Meetup', href: '#social-cognition-meetup'},
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="bg-brand-dark">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-between items-center h-12">
              <a href="#" className="text-xl font-bold text-white tracking-wider">
                {name}
              </a>
            </div>
          </div>
      </div>
      <div className="bg-brand-gold">
         <div className="container mx-auto px-6 max-w-5xl">
            <nav className="flex items-center justify-between h-14">
                <div className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-brand-dark font-semibold hover:text-white transition-colors">
                        {link.name}
                    </a>
                    ))}
                </div>
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-opacity">
                    CV
                </a>
            </nav>
         </div>
      </div>
    </header>
  );
};

export default Header;