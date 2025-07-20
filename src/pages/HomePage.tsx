import React from 'react';
import { ArrowRight, Brain, Zap, Target, Users, Shield, Clock, CheckCircle, TrendingUp, FileText, BarChart3, Calculator, Mail, Phone, MapPin, ExternalLink, Linkedin, Twitter, Github, Inbox, Video, Scissors } from 'lucide-react';
import AIServiceCard from '../components/AIServiceCard';
import ThemeToggle from '../components/ThemeToggle';

const HomePage: React.FC = () => {
  // Your actual AI services
  const aiServices = [
    {
      id: '1',
      title: 'Demand Forecasting Workflow',
      description: 'Advanced demand forecasting system using machine learning algorithms to predict future demand patterns, optimize inventory levels, and improve supply chain efficiency.',
      url: 'http://57.155.2.160:8501/',
      status: 'online' as const,
      category: 'Forecasting',
      icon: <TrendingUp className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'CV Analyzer Streamlit',
      description: 'Streamlit-based CV analysis platform for comprehensive resume evaluation, skill matching, and candidate assessment with interactive visualizations.',
      url: 'http://20.198.240.78:8501/',
      status: 'online' as const,
      category: 'HR Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'WBS-AUC Reconciliation Dashboard',
      description: 'Work Breakdown Structure and Activity-Based Costing reconciliation dashboard for project management and financial tracking with real-time updates.',
      url: 'http://20.195.24.94:8501/',
      status: 'online' as const,
      category: 'Finance',
      icon: <Calculator className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'GL Commentary Logic & Monthly Close Automation',
      description: 'General Ledger commentary automation system that streamlines monthly close processes with intelligent analysis and automated report generation.',
      url: 'http://172.188.98.57:8501/',
      status: 'online' as const,
      category: 'Finance',
      icon: <Brain className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '5',
      title: 'Email Aggregator Agent',
      description: 'AI agent that connects to email and classifies emails into Promotional, Sensitive, Junk categories and summarizes each one in a single line using LLM for efficient email management.',
      url: 'https://runner.hcompany.ai/chat/d97762ce-d0ab-40d1-9f04-f4991d3f2649/share',
      status: 'online' as const,
      category: 'Email AI',
      icon: <Inbox className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      title: 'Instagram Reels AI Agent',
      description: 'No signup needed. Fully autonomous AI Reels machine for content automation. Perfect for AI agents, content automation, full-stack AI apps, and monetizing short-form content.',
      url: 'https://viral-ai-video-engine.netlify.app/',
      status: 'online' as const,
      category: 'Content AI',
      icon: <Video className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '7',
      title: 'Elite Barber Shop App',
      description: 'Complete barber shop management system with real-time slot booking, barber dashboard, simulated WhatsApp/SMS notifications, and responsive design for modern salon operations.',
      url: 'https://anilkumaryadavkare.github.io/baber_SMB/',
      status: 'online' as const,
      category: 'Business App',
      icon: <Scissors className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '8',
      title: 'CV Analyzer Svelte',
      description: 'Modern CV analysis tool built with Svelte framework. Automatically extracts key information, skills, and experience from resumes with intelligent parsing capabilities.',
      url: 'http://20.6.93.130:5173/',
      status: 'offline' as const,
      category: 'HR Analytics',
      icon: <FileText className="w-5 h-5" />,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-apple transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-apple-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-title font-semibold text-apple-gray-900 dark:text-white">Agnivah AI Services</span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-apple-gray-50 via-white to-apple-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-display-large lg:text-[5.5rem] font-bold text-apple-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
                Reimagining Workflows with{' '}
                <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                  AI Agents
                </span>{' '}
                That Think, Act, and Deliver
              </h1>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-body-large text-apple-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                We're on a mission to eliminate repetitive work from modern businesses — by building intelligent AI agents that automate, adapt, and accelerate outcomes.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-2xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-apple-gray-900 dark:text-white font-semibold rounded-2xl border border-apple-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Contact Us
                <Mail className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-display font-bold text-accent-600 mb-2">5</div>
                <div className="text-body text-apple-gray-600 dark:text-gray-400">Services Online</div>
              </div>
              <div className="text-center">
                <div className="text-display font-bold text-accent-600 mb-2">24/7</div>
                <div className="text-body text-apple-gray-600 dark:text-gray-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-display font-bold text-accent-600 mb-2">100%</div>
                <div className="text-body text-apple-gray-600 dark:text-gray-400">Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-apple-gray-50/50 dark:bg-gray-800/50 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-display font-bold text-apple-gray-900 dark:text-white mb-6">About the Company</h2>
              <p className="text-body-large text-apple-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We are a next-generation AI startup focused on building domain-specific AI agents tailored for businesses that still rely heavily on manual processes. Our vision is simple — to transform businesses by replacing inefficiency with intelligence.
              </p>
              <p className="text-body-large text-apple-gray-600 dark:text-gray-300 mb-6">Whether it's:</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Manually entering data',
                  'Repeating customer support tasks',
                  'Cross-checking spreadsheets',
                  'Sending internal reminders',
                  'Generating repetitive reports'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-apple-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-large text-apple-gray-600 dark:text-gray-300">
                ...our AI agents are built to observe, learn, and automate these workflows — so humans can focus on what truly matters: strategic thinking, creativity, and decision-making.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-8 h-8" />, title: 'Context-aware', desc: 'Adapt to unique business structures' },
                { icon: <Zap className="w-8 h-8" />, title: 'Plug-and-play', desc: 'Easy integration with existing systems' },
                { icon: <Shield className="w-8 h-8" />, title: 'Secure by design', desc: 'Enterprise-grade security and privacy' },
                { icon: <Target className="w-8 h-8" />, title: 'Continuously learning', desc: 'Improving over time with your data' }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 animate-scale-in hover:scale-105 border border-transparent dark:border-gray-700/50" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="text-accent-500 mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-apple-gray-900 dark:text-white mb-2 text-title">{feature.title}</h3>
                  <p className="text-caption text-apple-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 bg-white dark:bg-gray-900 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-display font-bold text-apple-gray-900 dark:text-white mb-6">What We Do</h2>
            <p className="text-body-large text-apple-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We partner with businesses across industries — finance, logistics, HR, customer service, healthcare, and more — to identify friction points and rapidly deploy AI agents that solve real problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              'Analyze and respond to emails',
              'Generate reports and documentation',
              'Act as internal support assistants',
              'Extract and interpret data from documents',
              'Integrate with APIs and software systems',
              'Provide insights through natural conversations'
            ].map((capability, index) => (
              <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-6 h-6 bg-accent-100 dark:bg-accent-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-apple-gray-700 dark:text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-body-large text-apple-gray-600 dark:text-gray-300 font-medium">
              All in real time. All with minimal human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-apple-gray-50/50 dark:bg-gray-800/50 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-display font-bold text-apple-gray-900 dark:text-white mb-6">Our AI Services</h2>
            <p className="text-body-large text-apple-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Explore our collection of intelligent AI agents designed to automate and optimize your business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AIServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white dark:bg-gray-900 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-display font-bold text-apple-gray-900 dark:text-white mb-8">Why We Do It</h2>
            <blockquote className="text-headline font-medium text-apple-gray-900 dark:text-white mb-8 italic">
              "Every hour spent on repeatable work is an hour stolen from innovation."
            </blockquote>
            <div className="space-y-4 text-body-large text-apple-gray-600 dark:text-gray-300 mb-12">
              <p>We're here to return those hours to businesses.</p>
              <p>To empower people.</p>
              <p>To elevate work.</p>
              <p>And to help companies build an AI-powered future — today.</p>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-2xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Want to see what AI can automate in your business?
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-apple-gray-50/50 dark:bg-gray-800/50 hover:from-emerald-50 hover:via-green-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:via-emerald-800/10 dark:hover:to-emerald-900/20 transition-all duration-1000 ease-in-out delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-display font-bold text-apple-gray-900 dark:text-white mb-6">Get in Touch</h2>
            <p className="text-body-large text-apple-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Ready to transform your business with AI? Let's discuss how our intelligent agents can automate your workflows and accelerate your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-sm animate-slide-up border border-transparent dark:border-gray-700/50">
              <h3 className="text-headline font-bold text-apple-gray-900 dark:text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body font-medium text-apple-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-apple-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-body font-medium text-apple-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-apple-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-body font-medium text-apple-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-apple-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium text-apple-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-apple-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium text-apple-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-apple-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-700 text-apple-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-headline font-bold text-apple-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-apple-gray-600 dark:text-gray-300">anil.kare@agnivah.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-gray-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-apple-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-apple-gray-600 dark:text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-gray-900 dark:text-white mb-1">Office</h4>
                      <p className="text-apple-gray-600 dark:text-gray-300">Nacharam, Hyderabad, IN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-apple-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="w-12 h-12 bg-apple-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-apple-gray-600 dark:text-gray-300 hover:text-accent-600" />
                  </a>
                  <a
                    href="#"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="w-12 h-12 bg-apple-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-apple-gray-600 dark:text-gray-300 hover:text-accent-600" />
                  </a>
                  <a
                    href="https://x.com/AgnivahAI"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="w-12 h-12 bg-apple-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 text-apple-gray-600 dark:text-gray-300 hover:text-accent-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-apple-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6 text-apple-gray-600 dark:text-gray-300 hover:text-accent-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-apple-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-apple-gray-600 dark:text-gray-300 hover:text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .968-.786 1.754-1.754 1.754a1.754 1.754 0 0 1-1.754-1.754l-.043-.089c-.676.24-1.406.413-2.176.413-.631 0-1.243-.133-1.79-.328l-.548 2.448a1.25 1.25 0 1 1-2.497-.555l.062-.297a1.25 1.25 0 0 1 .555-2.497l.297.062.548-2.448a4.474 4.474 0 0 1-.328-1.79c0-.631.133-1.243.328-1.79l-2.448-.548a1.25 1.25 0 1 1 .555-2.497l.297.062a1.25 1.25 0 0 1 2.497.555l-.062.297.548 2.448c.547-.195 1.159-.328 1.79-.328.77 0 1.5.173 2.176.413l.043-.089a1.754 1.754 0 0 1 1.754-1.754z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-apple-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-title font-bold">Agnivah AI Services</span>
              </div>
              <p className="text-apple-gray-400 mb-6 max-w-md">
                Transforming businesses by replacing inefficiency with intelligence through domain-specific AI agents.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Anilkumaryadavkare" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-apple-gray-400 hover:text-accent-400 transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/agnivah/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-apple-gray-400 hover:text-accent-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/AgnivahAI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-apple-gray-400 hover:text-accent-400 transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:anil.kare@agnivah.com" 
                  className="text-apple-gray-400 hover:text-accent-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-apple-gray-400">
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">Demand Forecasting</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">CV Analysis</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">Financial Automation</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">Document Processing</a></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-accent-400 transition-colors duration-300 text-left">Demand Forecasting</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-accent-400 transition-colors duration-300 text-left">CV Analysis</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-accent-400 transition-colors duration-300 text-left">Email Automation</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-accent-400 transition-colors duration-300 text-left">Content AI</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-apple-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-accent-400 transition-colors duration-300 text-left">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent-400 transition-colors duration-300 text-left">Contact</button></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-apple-gray-800 dark:border-gray-800 mt-12 pt-8 text-center text-apple-gray-400">
            <p>&copy; 2024 Agnivah AI Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;