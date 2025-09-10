import React, { useState, useEffect } from 'react';
import Section from './Section';
import type { ResearchProject } from '../types';
import { getSimpleExplanation } from '../services/geminiService';

interface ResearchProps {
  projects: ResearchProject[];
}

const ResearchCard: React.FC<{ project: ResearchProject; onExplain: (project: ResearchProject) => void; }> = ({ project, onExplain }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <button 
        onClick={() => onExplain(project)}
        className="w-full text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Explain for a Layperson
      </button>
    </div>
  </div>
);

const ExplanationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  project: ResearchProject | null;
  explanation: string;
  isLoading: boolean;
  error: string | null;
}> = ({ isOpen, onClose, project, explanation, isLoading, error }) => {
  if (!isOpen) return null;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="explanation-title">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl" aria-label="Close modal">&times;</button>
        <h3 id="explanation-title" className="text-2xl font-bold text-gray-800 mb-4">{project?.title}</h3>
        {isLoading && (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {error && <p className="text-red-500 bg-red-100 p-3 rounded-md" role="alert">{error}</p>}
        {!isLoading && !error && explanation && <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{explanation}</p>}
      </div>
    </div>
  );
};


const Research: React.FC<ResearchProps> = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExplainClick = async (project: ResearchProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsLoading(true);
    setError(null);
    setExplanation('');
    try {
        const result = await getSimpleExplanation(project.title, project.description);
        setExplanation(result);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unknown error occurred. Please try again later.');
        }
    } finally {
        setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="research" title="Research Highlights">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ResearchCard key={project.title} project={project} onExplain={handleExplainClick} />
          ))}
        </div>
      </Section>
      <ExplanationModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        explanation={explanation}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default Research;