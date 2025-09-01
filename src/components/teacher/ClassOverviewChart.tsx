import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const classData = [
  { competency: 'Problem Solving', average: 78, students: 28 },
  { competency: 'Critical Thinking', average: 82, students: 28 },
  { competency: 'Communication', average: 75, students: 28 },
  { competency: 'Collaboration', average: 80, students: 28 },
  { competency: 'Creativity', average: 73, students: 28 },
];

export function ClassOverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={classData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="competency" 
          stroke="#6b7280"
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
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
          formatter={(value) => [`${value}%`, 'Class Average']}
        />
        <Bar 
          dataKey="average" 
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}