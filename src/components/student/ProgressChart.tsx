import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const progressData = [
  { day: 'Mon', mathematics: 75, science: 68, language: 82, social: 71 },
  { day: 'Tue', mathematics: 78, science: 72, language: 84, social: 73 },
  { day: 'Wed', mathematics: 82, science: 75, language: 86, social: 76 },
  { day: 'Thu', mathematics: 85, science: 78, language: 88, social: 79 },
  { day: 'Fri', mathematics: 88, science: 82, language: 90, social: 82 },
  { day: 'Sat', mathematics: 90, science: 85, language: 92, social: 85 },
  { day: 'Sun', mathematics: 92, science: 88, language: 94, social: 88 },
];

export function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={progressData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="day" 
          stroke="#6b7280"
          fontSize={12}
        />
        <YAxis 
          stroke="#6b7280"
          fontSize={12}
          domain={[0, 100]}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          }}
        />
        <Line 
          type="monotone" 
          dataKey="mathematics" 
          stroke="#3b82f6" 
          strokeWidth={2}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          name="Mathematics"
        />
        <Line 
          type="monotone" 
          dataKey="science" 
          stroke="#10b981" 
          strokeWidth={2}
          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
          name="Science"
        />
        <Line 
          type="monotone" 
          dataKey="language" 
          stroke="#8b5cf6" 
          strokeWidth={2}
          dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
          name="Language"
        />
        <Line 
          type="monotone" 
          dataKey="social" 
          stroke="#f59e0b" 
          strokeWidth={2}
          dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
          name="Social Studies"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}