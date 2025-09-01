export interface User {
  id: string;
  email: string;
  role: 'student' | 'teacher';
  full_name: string;
  created_at: string;
}

export interface Competency {
  id: string;
  name: string;
  description: string;
  subject_area: string;
  learning_goals: string[];
  created_at: string;
}

export interface Assessment {
  id: string;
  user_id: string;
  competency_id: string;
  score: number;
  max_score: number;
  completed_at: string;
  detailed_results: any;
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'interactive';
  url: string;
  description: string;
  competencies: string[];
  created_at: string;
}

export interface LearningPathway {
  id: string;
  user_id: string;
  resources: string[];
  progress_status: number;
  completion_date?: string;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}