import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Video, 
  FileText, 
  Target, 
  Clock, 
  Star,
  ExternalLink,
  Bookmark,
  BookOpen
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'interactive';
  subject: string;
  duration: string;
  rating: number;
  description: string;
  competencies: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  thumbnail: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Quadratic Equations',
    type: 'video',
    subject: 'Mathematics',
    duration: '18 min',
    rating: 4.8,
    description: 'Master the fundamentals of quadratic equations with visual examples and step-by-step solutions.',
    competencies: ['Problem Solving', 'Mathematical Reasoning'],
    difficulty: 'intermediate',
    thumbnail: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'Scientific Method in Action',
    type: 'interactive',
    subject: 'Science',
    duration: '25 min',
    rating: 4.9,
    description: 'Interactive simulation of conducting scientific experiments using proper methodology.',
    competencies: ['Critical Thinking', 'Scientific Inquiry'],
    difficulty: 'beginner',
    thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Effective Communication Strategies',
    type: 'article',
    subject: 'Language Arts',
    duration: '12 min',
    rating: 4.7,
    description: 'Learn techniques for clear, persuasive, and engaging written and verbal communication.',
    competencies: ['Communication', 'Critical Thinking'],
    difficulty: 'intermediate',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    title: 'Historical Analysis Workshop',
    type: 'interactive',
    subject: 'Social Studies',
    duration: '35 min',
    rating: 4.6,
    description: 'Develop skills in analyzing historical sources and drawing evidence-based conclusions.',
    competencies: ['Critical Thinking', 'Historical Analysis'],
    difficulty: 'advanced',
    thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || resource.subject === selectedSubject;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  const subjects = ['All', ...Array.from(new Set(resources.map(r => r.subject)))];
  const types = ['All', 'video', 'article', 'interactive'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
            <p className="text-gray-600 mt-1">Curated learning materials for competency development</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BookOpen className="h-4 w-4" />
            <span>{resources.length} resources available</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type} className="capitalize">
                {type === 'All' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => {
          const Icon = getModuleIcon(resource.type);
          const color = getTypeColor(resource.type);
          
          return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-700 capitalize`}>
                    {resource.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {resource.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500 ml-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subject:</span>
                    <span className="font-medium text-gray-900">{resource.subject}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Difficulty:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    } capitalize`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-xs text-gray-500 mb-2">Competencies:</div>
                    <div className="flex flex-wrap gap-1">
                      {resource.competencies.map((comp, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Open Resource</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
}