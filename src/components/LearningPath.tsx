import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Play, 
  BookOpen, 
  Video, 
  FileText,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

interface LearningModule {
  id: string;
  title: string;
  type: 'video' | 'article' | 'interactive' | 'assessment';
  duration: string;
  completed: boolean;
  locked: boolean;
  competency: string;
  description: string;
}

const learningModules: LearningModule[] = [
  {
    id: '1',
    title: 'Introduction to Algebraic Thinking',
    type: 'video',
    duration: '15 min',
    completed: true,
    locked: false,
    competency: 'Mathematical Problem Solving',
    description: 'Learn the fundamentals of algebraic reasoning and equation solving'
  },
  {
    id: '2',
    title: 'Practice: Basic Equations',
    type: 'interactive',
    duration: '20 min',
    completed: true,
    locked: false,
    competency: 'Mathematical Problem Solving',
    description: 'Interactive exercises to reinforce equation solving skills'
  },
  {
    id: '3',
    title: 'Real-World Problem Applications',
    type: 'article',
    duration: '12 min',
    completed: false,
    locked: false,
    competency: 'Mathematical Problem Solving',
    description: 'Explore how algebra applies to everyday situations and word problems'
  },
  {
    id: '4',
    title: 'Algebra Competency Assessment',
    type: 'assessment',
    duration: '30 min',
    completed: false,
    locked: false,
    competency: 'Mathematical Problem Solving',
    description: 'Demonstrate your mastery of algebraic concepts'
  },
  {
    id: '5',
    title: 'Advanced Equation Systems',
    type: 'video',
    duration: '25 min',
    completed: false,
    locked: true,
    competency: 'Mathematical Problem Solving',
    description: 'Tackle more complex algebraic systems and multiple variables'
  }
];

export function LearningPath() {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'article': return FileText;
      case 'interactive': return Target;
      case 'assessment': return CheckCircle;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'red';
      case 'article': return 'green';
      case 'interactive': return 'blue';
      case 'assessment': return 'purple';
      default: return 'gray';
    }
  };

  const completedCount = learningModules.filter(m => m.completed).length;
  const progressPercentage = Math.round((completedCount / learningModules.length) * 100);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Learning Path</h1>
            <p className="text-gray-600 mt-1">Personalized journey to mastery</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{progressPercentage}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-full h-3 mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{completedCount} of {learningModules.length} modules completed</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Level: Intermediate</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>Trending Up</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Modules */}
        <div className="lg:col-span-2 space-y-4">
          {learningModules.map((module, index) => {
            const Icon = getModuleIcon(module.type);
            const color = getTypeColor(module.type);
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 cursor-pointer transition-all hover:shadow-md ${
                  module.locked ? 'opacity-60' : ''
                } ${selectedModule?.id === module.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => !module.locked && setSelectedModule(module)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`relative p-3 rounded-lg bg-${color}-50`}>
                    <Icon className={`h-6 w-6 text-${color}-600`} />
                    {module.completed && (
                      <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-700 capitalize`}>
                          {module.type}
                        </span>
                        <span className="text-xs text-gray-500">{module.competency}</span>
                      </div>
                      
                      {!module.locked && (
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                          <Play className="h-4 w-4" />
                          <span>{module.completed ? 'Review' : 'Start'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Module Details Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit"
        >
          {selectedModule ? (
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg bg-${getTypeColor(selectedModule.type)}-50`}>
                  {React.createElement(getModuleIcon(selectedModule.type), {
                    className: `h-6 w-6 text-${getTypeColor(selectedModule.type)}-600`
                  })}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedModule.title}</h3>
                  <p className="text-sm text-gray-500">{selectedModule.duration}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{selectedModule.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Competency:</span>
                  <span className="font-medium text-gray-900">{selectedModule.competency}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getTypeColor(selectedModule.type)}-100 text-${getTypeColor(selectedModule.type)}-700 capitalize`}>
                    {selectedModule.type}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${selectedModule.completed ? 'text-green-600' : 'text-orange-600'}`}>
                    {selectedModule.completed ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2">
                <Play className="h-4 w-4" />
                <span>{selectedModule.completed ? 'Review Module' : 'Start Learning'}</span>
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select a module to view details and start learning</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}