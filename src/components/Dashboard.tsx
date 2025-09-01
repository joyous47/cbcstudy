import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { StudentDashboard } from './student/StudentDashboard';
import { TeacherDashboard } from './teacher/TeacherDashboard';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
}