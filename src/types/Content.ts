// types/Content.ts
export type Category = 'nutrition' | 'fitness' | 'mind' | 'post';

export type ContentItem = {
  id: string;                 // unique id (string for easy routing)
  category: Category;         // 'nutrition' | 'fitness' | 'mind' | 'post'
  title: string;
  description: string;
  tags: string[];
  // Optional metadata by type:
  durationMinutes?: number;   // workouts, mindfulness
  difficulty?: 'easy' | 'moderate' | 'hard';
  calories?: number;          // meals
  macros?: { protein?: number; carbs?: number; fat?: number };
  // Media/links (optional)
  coverImage?: string;        // /public/images/...
  externalUrl?: string;
  createdAt?: string;         // ISO string
};
