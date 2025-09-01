import React from 'react';
import { Target } from 'lucide-react';

const competencies = [
  { name: 'Problem Solving', progress: 85, color: 'blue' },
  { name: 'Critical Thinking', progress: 72, color: 'green' },
  { name: 'Communication', progress: 90, color: 'purple' },
  { name: 'Collaboration', progress: 68, color: 'orange' },
];

export function CompetencyGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {competencies.map((competency) => (
        <div key={competency.name} className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <Target className={`h-5 w-5 text-${competency.color}-600`} />
            <span className="text-sm font-medium text-gray-900">{competency.progress}%</span>
          </div>
          <h3 className="font-medium text-gray-900 text-sm">{competency.name}</h3>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-${competency.color}-500`}
              style={{ width: `${competency.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}