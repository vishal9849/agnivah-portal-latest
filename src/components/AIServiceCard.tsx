import React from 'react';
import { ExternalLink, Activity, Github } from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  url: string;
  status: 'online' | 'offline' | 'maintenance';
  category: string;
  icon: React.ReactNode;
  image: string;
}

interface AIServiceCardProps {
  service: AIService;
}

const AIServiceCard: React.FC<AIServiceCardProps> = ({ service }) => {
  const handleOpenService = () => {
    window.open(service.url, '_blank', 'noopener,noreferrer');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-accent-100 text-accent-800 dark:bg-accent-900/20 dark:text-accent-400';
      case 'offline':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-apple-gray-200 text-apple-gray-600 dark:bg-apple-gray-700 dark:text-apple-gray-400';
    }
  };

  return (
    <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 border border-apple-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:scale-[1.02] h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
            <Activity className="w-3 h-3 inline mr-1.5" />
            {service.status}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-apple-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl text-white shadow-lg">
              {service.icon}
            </div>
            <div>
              <h3 className="text-title font-semibold text-apple-gray-900 dark:text-white font-apple">
                {service.title}
              </h3>
              <span className="text-caption text-apple-gray-500 dark:text-gray-400 font-apple">
                {service.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-apple-gray-600 dark:text-gray-300 text-body leading-relaxed mb-8 font-apple flex-1">
          {service.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto">
          <div className="space-y-3">
            <button
              onClick={handleOpenService}
              disabled={service.status === 'offline'}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 rounded-2xl font-medium hover:from-accent-600 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-apple hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </button>
            <button
              onClick={() => window.open('https://github.com/Anilkumaryadavkare/', '_blank', 'noopener,noreferrer')}
              disabled={service.status === 'offline'}
              className="w-full flex items-center justify-center space-x-2 bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white py-3 px-4 rounded-2xl font-medium border border-apple-gray-300 dark:border-gray-600 hover:bg-apple-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all duration-300 font-apple hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServiceCard;