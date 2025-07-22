import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { aiServices } from '../config/services.tsx';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../config/constants';
import AIServiceCard from '../components/AIServiceCard';
import ThemeToggle from '../components/ThemeToggle';
import ScrollNavigation from '../components/ScrollNavigation';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import { scrollToSection } from '../utils/navigation';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection } = useScrollNavigation();
  const location = useLocation();

  const categories = ['All', ...Array.from(new Set(aiServices.map(service => service.category)))];
  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToFooter) {
      setTimeout(() => {
        const footer = document.querySelector('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-apple transition-all duration-400">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? 'glass-effect shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <img 
                src="/agnivah-logo.png" 
                alt="Agnivah Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white font-sf-pro">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: 'About', id: NAVIGATION_LINKS.about },
                { label: 'Services', id: NAVIGATION_LINKS.projects },
                { label: 'Mission', id: NAVIGATION_LINKS.mission },
                { label: 'Contact', id: NAVIGATION_LINKS.contact }
              ].map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="text-gray-600 dark:text-gray-300 hover:text-accent-600 transition-all duration-300 font-medium hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-2xl glass-effect hover:scale-105 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 glass-effect rounded-b-3xl border-t border-gray-200/50 dark:border-gray-700/50 animate-slide-down">
              <nav className="flex flex-col space-y-4">
                {[
                  { label: 'About', id: NAVIGATION_LINKS.about },
                  { label: 'Services', id: NAVIGATION_LINKS.projects },
                  { label: 'Mission', id: NAVIGATION_LINKS.mission },
                  { label: 'Contact', id: NAVIGATION_LINKS.contact }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-accent-600 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-accent-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        
        {/* Additional gradient overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-accent-100/20 dark:from-gray-900/20 dark:via-transparent dark:to-gray-800/20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Transforming businesses by replacing 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-500"> inefficiency with intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Domain-specific AI agents that streamline operations, enhance productivity, and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleScrollToSection(NAVIGATION_LINKS.projects)}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-accent-600 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all duration-300 font-apple hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore AI Services
              </button>
              <button 
                onClick={() => handleScrollToSection(NAVIGATION_LINKS.contact)}
                className="glass-effect text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 font-apple hover:scale-105 shadow-sm hover:shadow-xl"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id={NAVIGATION_LINKS.about} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        activeSection === NAVIGATION_LINKS.about 
          ? 'bg-gradient-to-br from-accent-50/50 via-accent-25/30 to-gray-50 dark:from-accent-900/20 dark:via-gray-800 dark:to-accent-900/10 shadow-inner' 
          : 'bg-gradient-to-br from-gray-50 via-gray-25 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-850 dark:to-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About Agnivah
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in creating intelligent AI solutions that streamline business processes, enhance productivity, and drive innovation across various industries. Our domain-specific agents are designed to understand your unique challenges and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id={NAVIGATION_LINKS.projects} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        activeSection === NAVIGATION_LINKS.projects 
          ? 'bg-gradient-to-br from-white via-accent-50/20 to-accent-25/10 dark:from-gray-900 dark:via-accent-900/10 dark:to-gray-900 shadow-inner' 
          : 'bg-gradient-to-br from-white via-gray-25/20 to-gray-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-875 dark:to-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
              AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Explore our comprehensive suite of AI-powered tools and services designed to transform your business operations with intelligent automation.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg hover:from-accent-600 hover:to-accent-700'
                      : 'glass-effect text-gray-700 dark:text-gray-300 hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AIServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id={NAVIGATION_LINKS.mission} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        activeSection === NAVIGATION_LINKS.mission 
          ? 'bg-gradient-to-br from-accent-50/50 via-accent-25/30 to-gray-50 dark:from-accent-900/20 dark:via-gray-800 dark:to-accent-900/10 shadow-inner' 
          : 'bg-gradient-to-br from-gray-50 via-gray-25 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-850 dark:to-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To democratize artificial intelligence by making advanced AI tools accessible, practical, and transformative for businesses of all sizes. We believe in replacing inefficiency with intelligence, one solution at a time, creating a future where AI empowers human potential.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id={NAVIGATION_LINKS.contact} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        activeSection === NAVIGATION_LINKS.contact 
          ? 'bg-gradient-to-br from-white via-accent-50/20 to-accent-25/10 dark:from-gray-900 dark:via-accent-900/10 dark:to-gray-900 shadow-inner' 
          : 'bg-gradient-to-br from-white via-gray-25/20 to-gray-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-875 dark:to-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
            Ready to transform your business with AI? Let's discuss how our intelligent solutions can help you achieve your goals and drive unprecedented growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                icon: Mail, 
                title: 'Email', 
                content: COMPANY_INFO.emails, 
                href: `mailto:${COMPANY_INFO.emails[0]}` 
              },
              { 
                icon: () => <span className="text-2xl">📞</span>, 
                title: 'Phone', 
                content: COMPANY_INFO.phones 
              },
              { icon: () => <span className="text-2xl">📍</span>, title: 'Location', content: COMPANY_INFO.address },
              { icon: Github, title: 'GitHub', content: 'Open Source', href: COMPANY_INFO.social.github },
              { icon: Linkedin, title: 'LinkedIn', content: 'Connect', href: COMPANY_INFO.social.linkedin }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="glass-effect rounded-3xl p-8 shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 text-accent-600 mx-auto mb-4 flex items-center justify-center">
                  <item.icon />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                  {item.title}
                </h3>
                {item.title === 'Email' ? (
                  <div className="space-y-1">
                    {(item.content as string[]).map((email, index) => (
                      <a 
                        key={index}
                        href={`mailto:${email}`}
                        className="block text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 font-medium text-sm"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                ) : item.title === 'Phone' ? (
                  <div className="space-y-1">
                    {(item.content as string[]).map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 font-medium text-sm"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                ) : item.href ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 font-medium"
                  >
                    {item.content as string}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.content as string}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/agnivah-logo.png" 
                  alt="Agnivah Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <div className="flex space-x-4">
                {[
                  { href: COMPANY_INFO.social.github, icon: Github },
                  { href: COMPANY_INFO.social.linkedin, icon: Linkedin },
                  { href: COMPANY_INFO.social.twitter, icon: Twitter },
                  { href: COMPANY_INFO.social.email, icon: Mail }
                ].map((social, index) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 dark:bg-gray-700 text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white dark:hover:text-white rounded-2xl hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  { label: 'About', id: NAVIGATION_LINKS.about },
                  { label: 'Services', id: NAVIGATION_LINKS.projects },
                  { label: 'Mission', id: NAVIGATION_LINKS.mission },
                  { label: 'Contact', id: NAVIGATION_LINKS.contact }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleScrollToSection(item.id)} 
                      className="hover:text-accent-400 transition-all duration-300 text-left hover:translate-x-1"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="hover:text-accent-400 transition-all duration-300 hover:translate-x-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service" 
                    className="hover:text-accent-400 transition-all duration-300 hover:translate-x-1"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 {COMPANY_INFO.name}. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Built with ❤️ for the future of AI
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Navigation */}
      <ScrollNavigation />
    </div>
  );
};

export default HomePage;