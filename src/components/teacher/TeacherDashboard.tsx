import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  Award,
  BookOpen,
  Target,
  ChevronRight,
  Plus
} from 'lucide-react';
import { ClassOverviewChart } from './ClassOverviewChart';

export function TeacherDashboard() {
  const classStats = [
    { title: 'Total Students', value: '28', change: '+2', icon: Users, color: 'blue' },
    { title: 'Avg. Progress', value: '78%', change: '+5%', icon: TrendingUp, color: 'green' },
    { title: 'Need Attention', value: '4', change: '-1', icon: AlertCircle, color: 'red' },
    { title: 'Assessments Created', value: '15', change: '+3', icon: BookOpen, color: 'purple' },
  ];

  const strugglingStudents = [
    { name: 'Alex Johnson', competency: 'Mathematics', progress: 45 },
    { name: 'Sarah Kim', competency: 'Science', progress: 52 },
    { name: 'Mike Chen', competency: 'Language Arts', progress: 48 },
  ];

  const recentActivity = [
    { id: 1, student: 'Emma Watson', action: 'Completed Science Assessment', score: '92%', time: '1 hour ago' },
    { id: 2, student: 'John Doe', action: 'Started Mathematics Module', score: '-', time: '2 hours ago' },
    { id: 3, student: 'Lisa Park', action: 'Earned Critical Thinker Badge', score: '-', time: '3 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your students' progress and competency development</p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create Assessment</span>
        </motion.button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {classStats.map((stat, index) => (
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
        {/* Class Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Class Progress Overview</h2>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Subjects</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Language Arts</option>
            </select>
          </div>
          <ClassOverviewChart />
        </motion.div>

        {/* Students Needing Attention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Students Needing Attention</h2>
          <div className="space-y-3">
            {strugglingStudents.map((student, index) => (
              <div key={index} className="p-3 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.competency}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">{student.progress}%</p>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Assign Help
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Student Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Student Activity</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
            View All Activity <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-sm font-medium text-gray-700 pb-2">Student</th>
                <th className="text-left text-sm font-medium text-gray-700 pb-2">Activity</th>
                <th className="text-left text-sm font-medium text-gray-700 pb-2">Score</th>
                <th className="text-left text-sm font-medium text-gray-700 pb-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-sm font-medium text-gray-900">{activity.student}</td>
                  <td className="py-3 text-sm text-gray-600">{activity.action}</td>
                  <td className="py-3 text-sm">
                    {activity.score !== '-' ? (
                      <span className="font-medium text-green-600">{activity.score}</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 text-sm text-gray-500">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}