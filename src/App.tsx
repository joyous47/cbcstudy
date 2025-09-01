import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { CompetencyAssessment } from './components/CompetencyAssessment';
import { LearningPath } from './components/LearningPath';
import { ResourceLibrary } from './components/ResourceLibrary';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="competencies" element={<Navigate to="/assessment" replace />} />
          <Route path="assessment" element={<CompetencyAssessment />} />
          <Route path="learning-path" element={<LearningPath />} />
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="chat" element={<AIChat />} />
          <Route path="achievements" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900">Achievements Coming Soon</h2></div>} />
          <Route path="students" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900">Student Management Coming Soon</h2></div>} />
          <Route path="assessments" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900">Assessment Creation Coming Soon</h2></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;