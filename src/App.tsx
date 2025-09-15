import React, { useState, useRef } from 'react';
import { Play, Bot, BarChart3, Download, ExternalLink, Zap, Database, Brain, Code, BarChart as ChartBar, Users, Github, Linkedin, FileSpreadsheet, MessageSquare, TrendingUp, Shield, Sparkles, ChevronDown, X, ArrowRight, Cpu, Layers, Globe } from 'lucide-react';

function App() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const teamMembers = [
    {
      name: 'Manuj Chaudhari',
      role: 'Project Manager & Full-Stack Developer',
      description: 'Leading the development and coordination of NEXA for TenAI Hackathon. Expert in full-stack development with focus on scalable architecture and team coordination.',
      linkedin: 'https://www.linkedin.com/in/manuj-chaudhari-54b7bb242/',
      github: 'https://github.com/webcrafter011'
    },
    {
      name: 'Govinda Tiwari',
      role: 'Full stack developer',
      description: 'Crafting beautiful and intuitive user interfaces with React and Tailwind. Passionate about creating seamless user experiences and modern design systems.',
      linkedin: 'https://www.linkedin.com/in/chirayu-tiwari-539a60282/',
      github: 'https://github.com/govinda-vk'
    },
    {
      name: 'Tejas Ramteke',
      role: 'API & Database Developer',
      description: 'Building robust backend systems and AI integration for seamless functionality. Specialized in Node.js, MongoDB, and scalable API architecture.',
      linkedin: 'https://linkedin.com/in/tejas-ramteke',
      github: 'https://github.com/gainGeek52'
    },
    {
      name: 'Tejas Ramteke',
      role: 'Machine Learning Developer',
      description: 'Implementing AI-powered features and intelligent chat capabilities. Expert in RAG systems, vector databases, and natural language processing.',
      linkedin: 'https://linkedin.com/in/tejas-ramteke-ml',
      github: 'https://github.com/tejas-ramteke-ml'
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, black 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, black 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, black 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-8 text-center relative z-10 max-w-6xl">
          <div className="mb-16">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-8 border border-black/10">
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-sm font-medium tracking-wide">AI-Powered Business Solutions</span>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black text-black mb-8 tracking-tighter relative">
              <span className="relative inline-block">
                NEXA
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 blur-2xl opacity-30 animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
              Simplifying Business, Amplifying Growth
            </p>
            
            <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
              Transform your business operations with cutting-edge AI technology
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#demo-video" className="group relative overflow-hidden bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Play className="w-5 h-5" fill="white" />
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#solutions" className="group px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 border-2 border-black/20 hover:border-black hover:bg-black hover:text-white flex items-center gap-3">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-6 h-6 text-black/30 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Elegant divider */}
      <div className="relative h-32 -mt-1">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="rgb(249 250 251)" />
        </svg>
      </div>

      {/* About the Problem Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">The Challenge</span>
            <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern businesses face critical operational challenges that hinder growth and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-black">Customer Support Crisis</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support teams drowning in repetitive queries, unable to focus on complex issues</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Customer frustration mounting due to slow response times and inconsistent quality</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lost revenue from poor customer experience and lack of 24/7 availability</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-black">Financial Blind Spots</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hours wasted on manual Excel analysis with high error rates</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Missing critical insights buried in spreadsheet data</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Inability to predict cash flow trends leading to poor financial decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solutions" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">The Solution</span>
            <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
              Meet NEXA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Two revolutionary AI-powered tools that transform how modern businesses operate
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Askit Bot Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black blur-xl opacity-20"></div>
                    <div className="relative bg-black p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">Askit Bot</h3>
                    <p className="text-gray-500 text-sm mt-1">Intelligent Customer Support</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Revolutionary AI chatbot that transforms customer support with instant, intelligent responses powered by advanced NLP
                </p>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <Sparkles className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">1-line script integration</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <Shield className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">24/7 intelligent support</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <Zap className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Instant AI responses</span>
                  </div>
                </div>
                
                <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  <code className="text-sm text-gray-300 font-mono relative z-10">
                    &lt;script src="nexa-askit-bot.js"&gt;&lt;/script&gt;
                  </code>
                </div>
              </div>
            </div>
            
            {/* Cashflow Analyzer Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black blur-xl opacity-20"></div>
                    <div className="relative bg-black p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">Cashflow Analyzer</h3>
                    <p className="text-gray-500 text-sm mt-1">AI Financial Intelligence</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Transform Excel chaos into crystal-clear insights with AI-powered analysis and predictive modeling
                </p>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <FileSpreadsheet className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Excel to AI insights</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <ChartBar className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Interactive visualizations</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group/item">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/item:bg-black transition-colors duration-300">
                      <Brain className="w-5 h-5 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Predictive analytics</span>
                  </div>
                </div>
                
                <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  <div className="text-sm text-gray-300 font-mono relative z-10">
                    Upload → Analyze → Predict → Succeed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
<section id="demo-video" className="py-32 bg-gray-50 relative">
  <div className="container mx-auto px-8 max-w-6xl">
    <div className="text-center mb-20">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">Live Demo</span>
      <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
        See NEXA in Action
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">Experience the power of AI-driven business transformation</p>
    </div>
    
    <div className="max-w-5xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
          <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/60 z-10">
                <button 
                  onClick={handleVideoPlay}
                  className="group/play bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover/play:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                  <span className="text-lg">Play Demo</span>
                </button>
              </div>
            ) : (
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button 
                  onClick={handleVideoPause}
                  className="bg-white/90 backdrop-blur-sm text-black p-2 rounded-xl hover:bg-white transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
            
            {isVideoPlaying ? (
              <iframe 
                src="/videos/demo.mp4" 
                className="w-full h-full rounded-2xl"
                frameBorder="0"
                allowFullScreen
                title="NEXA Demo Video"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Click to play demo video</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Business Model Canvas Section */}
<section className="py-32 bg-white relative overflow-hidden">
  <div className="container mx-auto px-8 max-w-6xl">
    <div className="text-center mb-20">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">Strategy</span>
      <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
        Business Model Canvas
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">Our strategic approach to market success and sustainable growth</p>
    </div>
    
    <div className="max-w-6xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-300 mb-8 overflow-hidden">
            <iframe 
              src="/docs/Nexa Business Model Canvas.pdf" 
              title="Business Model Canvas" 
              className="w-full h-full rounded-xl" 
              style={{ border: 'none' }}
            ></iframe>
          </div>
          
          <div className="text-center">
            <a href="/docs/Nexa Business Model Canvas.pdf" download className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download Canvas PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Presentation Section */}
<section className="py-32 bg-gray-50 relative">
  <div className="container mx-auto px-8 max-w-6xl">
    <div className="text-center mb-20">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">Documentation</span>
      <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
        Project Presentation
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">Comprehensive overview of NEXA's features and technical implementation</p>
    </div>
    
    <div className="max-w-6xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
          <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-300 mb-8 overflow-hidden">
            <iframe 
              src="/docs/ppt.pdf" 
              title="Project Presentation" 
              className="w-full h-full rounded-xl" 
              style={{ border: 'none' }}
            ></iframe>
          </div>
          
          <div className="text-center">
            <a href="/docs/ppt.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <ExternalLink className="w-5 h-5" />
              View Full Presentation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Tech Stack Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">Technology</span>
            <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
              Powered By Innovation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Built with cutting-edge technologies for maximum performance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Brain, name: "AI & ML", desc: "Advanced Models" },
              { icon: Globe, name: "Web Scraping", desc: "Real-time Data" },
              { icon: FileSpreadsheet, name: "Excel API", desc: "Data Processing" },
              { icon: ChartBar, name: "Analytics", desc: "Deep Insights" },
              { icon: Database, name: "Database", desc: "Secure Storage" },
              { icon: Cpu, name: "Real-time", desc: "Instant Updates" }
            ].map((tech, index) => (
              <div key={index} className="group text-center cursor-pointer">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-black blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-black transition-all duration-300 group-hover:scale-110">
                    <tech.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <p className="font-semibold text-black group-hover:text-gray-900 transition-colors duration-300 mb-1">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">The Innovators</span>
            <h2 className="text-6xl font-black mb-8 text-black tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Brilliant minds behind NEXA's revolutionary technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative h-96 perspective-1000">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d cursor-pointer ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col justify-center border border-gray-100">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Users className="w-12 h-12 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Click for details</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black rounded-3xl p-8 shadow-xl text-center flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white">{member.name}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <a 
                        href={member.linkedin} 
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 text-black" />
                      </a>
                      <a 
                        href={member.github} 
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="container mx-auto px-8 max-w-4xl relative z-10 text-center">
          <div className="mb-12">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 block">Get Started</span>
            <h2 className="text-6xl font-black mb-8 text-white tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Join the AI revolution with NEXA and experience the future of business operations
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#" className="group relative overflow-hidden bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Zap className="w-5 h-5" />
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#demo-video" className="group px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white text-white hover:bg-white hover:text-black flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 relative">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">NEXA</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2023 NEXA. Built for TenAI Hackathon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom styles for 3D flip effect */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;