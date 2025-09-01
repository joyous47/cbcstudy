import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BookOpen, 
  BarChart3, 
  Target, 
  MessageSquare, 
  Users, 
  Award,
  Library,
  GraduationCap
} from 'lucide-react';
import type { User } from '../types';

interface SidebarProps {
  user: User;
}

export function Sidebar({ user }: SidebarProps) {
  const studentNavItems = [
    { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { to: '/competencies', icon: Target, label: 'Competencies' },
    { to: '/learning-path', icon: BookOpen, label: 'Learning Path' },
    { to: '/resources', icon: Library, label: 'Resources' },
    { to: '/chat', icon: MessageSquare, label: 'AI Assistant' },
    { to: '/achievements', icon: Award, label: 'Achievements' },
  ];

  const teacherNavItems = [
    { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { to: '/students', icon: Users, label: 'Students' },
    { to: '/competencies', icon: Target, label: 'Competencies' },
    { to: '/resources', icon: Library, label: 'Resources' },
    { to: '/assessments', icon: GraduationCap, label: 'Assessments' },
  ];

  const navItems = user.role === 'teacher' ? teacherNavItems : studentNavItems;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">CBC Study</h1>
            <p className="text-xs text-gray-500">AI-Powered Learning</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-1">Need Help?</h3>
          <p className="text-xs text-gray-600 mb-2">Get instant AI assistance</p>
          <NavLink
            to="/chat"
            className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            <MessageSquare className="h-3 w-3 mr-1" />
            Ask AI Assistant
          </NavLink>
        </div>
      </div>
    </div>
  );
}