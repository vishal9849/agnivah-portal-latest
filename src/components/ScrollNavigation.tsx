import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

const ScrollNavigation: React.FC = () => {
  const { currentSection, isVisible, sections, scrollToSection } = useScrollNavigation();

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
      {/* Up Arrow */}
      <button
        onClick={() => scrollToSection('up')}
        disabled={currentSection === 0}
        className={`p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all duration-400 hover:scale-110 ${
          currentSection === 0 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:-translate-y-0.5'
        }`}
        aria-label="Previous section"
      >
        <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Section Indicator */}
      <div className="flex flex-col space-y-1 py-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'bg-accent-500 scale-125'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Down Arrow */}
      <button
        onClick={() => scrollToSection('down')}
        className="p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all duration-400 hover:scale-110 hover:translate-y-0.5"
        aria-label="Next section"
      >
        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default ScrollNavigation;