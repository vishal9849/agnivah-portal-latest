import { TrendingUp, BarChart3, Calculator, Brain, Inbox, Video, Scissors, FileText } from 'lucide-react';

export interface AIService {
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

export const aiServices: AIService[] = [
  {
    id: '5',
    title: 'Email Aggregator Agent',
    description: 'AI agent that connects to email and classifies emails into Promotional, Sensitive, Junk categories and summarizes each one in a single line using LLM for efficient email management.',
    url: 'https://runner.hcompany.ai/chat/d97762ce-d0ab-40d1-9f04-f4991d3f2649/share',
    status: 'online' as const,
    category: 'Email AI',
    icon: <Inbox className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '7',
    title: 'Elite Barber Shop App',
    description: 'Complete barber shop management system with real-time slot booking, barber dashboard, simulated WhatsApp/SMS notifications, and responsive design for modern salon operations.',
    url: 'https://anilkumaryadavkare.github.io/baber_SMB/',
    status: 'online' as const,
    category: 'Business App',
    icon: <Scissors className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare/baber_SMB'
  },
  {
    id: '6',
    title: 'Instagram Reels AI Agent',
    description: 'No signup needed. Fully autonomous AI Reels machine for content automation. Perfect for AI agents, content automation, full-stack AI apps, and monetizing short-form content.',
    url: 'https://viral-ai-video-engine.netlify.app/',
    status: 'online' as const,
    category: 'Content AI',
    icon: <Video className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '1',
    title: 'Demand Forecasting Workflow',
    description: 'Advanced demand forecasting system using machine learning algorithms to predict future demand patterns, optimize inventory levels, and improve supply chain efficiency.',
    url: 'http://57.155.2.160:8501/',
    status: 'online' as const,
    category: 'Forecasting',
    icon: <TrendingUp className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '2',
    title: 'CV Analyzer Streamlit',
    description: 'Streamlit-based CV analysis platform for comprehensive resume evaluation, skill matching, and candidate assessment with interactive visualizations.',
    url: 'http://20.198.240.78:8501/',
    status: 'online' as const,
    category: 'HR Analytics',
    icon: <BarChart3 className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '3',
    title: 'WBS-AUC Reconciliation Dashboard',
    description: 'Work Breakdown Structure and Activity-Based Costing reconciliation dashboard for project management and financial tracking with real-time updates.',
    url: 'http://20.195.24.94:8501/',
    status: 'online' as const,
    category: 'Finance',
    icon: <Calculator className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '4',
    title: 'GL Commentary Logic & Monthly Close Automation',
    description: 'General Ledger commentary automation system that streamlines monthly close processes with intelligent analysis and automated report generation.',
    url: 'http://172.188.98.57:8501/',
    status: 'online' as const,
    category: 'Finance',
    icon: <Brain className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  },
  {
    id: '8',
    title: 'CV Analyzer Svelte',
    description: 'Modern CV analysis tool built with Svelte framework. Automatically extracts key information, skills, and experience from resumes with intelligent parsing capabilities.',
    url: 'http://20.6.93.130:5173/',
    status: 'offline' as const,
    category: 'HR Analytics',
    icon: <FileText className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Anilkumaryadavkare'
  }
];