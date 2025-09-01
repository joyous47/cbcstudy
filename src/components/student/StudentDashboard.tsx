import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  BookOpen, 
  TrendingUp, 
  Clock,
  Award,
  Play,
  ChevronRight
} from 'lucide-react';
import { ProgressChart } from './ProgressChart';
import { CompetencyGrid } from './CompetencyGrid';

export function StudentDashboard() {
  const recentActivity = [
    { id: 1, title: 'Completed Mathematics Assessment', time: '2 hours ago', type: 'assessment' },
    { id: 2, title: 'Watched: Algebraic Equations Video', time: '1 day ago', type: 'resource' },
    { id: 3, title: 'Earned Problem Solver Badge', time: '2 days ago', type: 'achievement' },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Science Lab Report', due: 'Tomorrow', priority: 'high' },
    { id: 2, title: 'Literature Analysis Quiz', due: 'Friday', priority: 'medium' },
    { id: 3, title: 'History Timeline Project', due: 'Next Week', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey</p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center space-x-2"
        >
          <Play className="h-4 w-4" />
          <span>Start Learning</span>
        </motion.button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Competencies Mastered', value: '12', change: '+2', icon: Target, color: 'blue' },
          { title: 'Learning Hours', value: '48', change: '+6', icon: Clock, color: 'green' },
          { title: 'Assessments Completed', value: '24', change: '+3', icon: BookOpen, color: 'purple' },
          { title: 'Achievements Earned', value: '8', change: '+1', icon: Award, color: 'orange' },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change} this week</p>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mt-4">{stat.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Learning Progress</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <TrendingUp className="h-4 w-4" />
              <span>Last 30 days</span>
            </div>
          </div>
          <ProgressChart />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'assessment' ? 'bg-blue-50' :
                  activity.type === 'resource' ? 'bg-green-50' : 'bg-orange-50'
                }`}>
                  {activity.type === 'assessment' && <Target className="h-4 w-4 text-blue-600" />}
                  {activity.type === 'resource' && <BookOpen className="h-4 w-4 text-green-600" />}
                  {activity.type === 'achievement' && <Award className="h-4 w-4 text-orange-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Competency Overview and Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Competency Overview</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <CompetencyGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-600">Due: {task.due}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  task.priority === 'high' ? 'bg-red-100 text-red-700' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {task.priority}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}