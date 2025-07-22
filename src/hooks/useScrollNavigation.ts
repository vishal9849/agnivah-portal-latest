import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../config/constants';

export interface Section {
  id: string;
  name: string;
}

export const useSections = (): Section[] => [
  { id: 'top', name: 'Top' },
  { id: 'hero', name: 'Hero' },
  { id: NAVIGATION_LINKS.about, name: 'About' },
  { id: NAVIGATION_LINKS.projects, name: 'Services' },
  { id: NAVIGATION_LINKS.mission, name: 'Mission' },
  { id: NAVIGATION_LINKS.contact, name: 'Contact' },
  { id: 'footer', name: 'Footer' }
];

export const useScrollNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sections = useSections();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsVisible(scrollPosition > 300);

      // Determine active section for background changes
      let current = 'hero';
      
      if (scrollPosition < 300) {
        current = 'hero';
      } else {
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const footerTop = footerRect.top + window.scrollY;
          if (scrollPosition >= footerTop - 400) {
            current = 'footer';
            setActiveSection(current);
            return;
          }
        }
        
        const sectionIds = [NAVIGATION_LINKS.about, NAVIGATION_LINKS.projects, NAVIGATION_LINKS.mission, NAVIGATION_LINKS.contact];
        sectionIds.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            const elementTop = element.offsetTop;
            if (scrollPosition >= elementTop - 200) {
              current = sectionId;
            }
          }
        });
      }
      
      setActiveSection(current);

      // Find current section for navigation arrows
      const sectionElements = sections.map(section => ({
        ...section,
        element: section.id === 'top' ? document.body : 
                section.id === 'footer' ? document.querySelector('footer') : 
                document.getElementById(section.id),
      }));

      let currentIndex = 0;
      sectionElements.forEach((section, index) => {
        if (section.element) {
          if (section.id === 'top') {
            if (scrollPosition < 300) {
              currentIndex = index;
            }
          } else if (section.id === 'footer') {
            const rect = section.element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (scrollPosition >= elementTop - 400) {
              currentIndex = index;
            }
          } else {
            const rect = section.element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (scrollPosition >= elementTop - 200) {
              currentIndex = index;
            }
          }
        }
      });

      setCurrentSection(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' 
      ? Math.max(0, currentSection - 1)
      : Math.min(sections.length - 1, currentSection + 1);
    
    const targetSection = sections[targetIndex];
    
    if (targetSection.id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetSection.id === 'footer') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetSection.id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop - headerOffset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  return {
    currentSection,
    isVisible,
    activeSection,
    sections,
    scrollToSection
  };
};