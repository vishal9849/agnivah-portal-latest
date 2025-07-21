import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  url: string;
  status: 'online' | 'offline' | 'maintenance';
  category: string;
  icon: React.ReactNode;
  image: string;
  githubUrl?: string;
}

interface AIServiceCardProps {
  service: AIService;
}

const AIServiceCard: React.FC<AIServiceCardProps> = ({ service }) => {
  const handleOpenService = () => {
    window.open(service.url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenGithub = () => {
    if (service.githubUrl) {
      window.open(service.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'offline':
        return 'bg-red-100 text-red-800 border border-red-200';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      default:
        return 'bg-gray-200 text-gray-600 border border-gray-300';
    }
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-sm ${getStatusColor(service.status)}`}>
            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {service.title}
              </h3>
              <span className="text-sm text-accent-600 font-medium bg-accent-50 dark:bg-accent-900/20 px-3 py-1 rounded-full">
                {service.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base flex-1">
          {service.description}
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleOpenService}
            disabled={service.status === 'offline'}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 rounded-2xl font-medium hover:from-accent-600 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-apple hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Launch Service</span>
          </button>
          
          {service.githubUrl && (
            <button
              onClick={handleOpenGithub}
              className="w-full flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-4 rounded-2xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 font-apple hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIServiceCard;