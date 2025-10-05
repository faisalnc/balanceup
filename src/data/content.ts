// data/content.ts
import { ContentItem } from '@/types/Content';

export const CONTENT: ContentItem[] = [
  // ---------- Nutrition ----------
{
  id: 'nut-overnight-oats',
  category: 'nutrition',
  title: 'Overnight Oats (Protein Boost)',
  description:
    'Quick make-ahead breakfast with oats, chia, and Greek yogurt. Great for days with back-to-back classes.',
  tags: ['breakfast', 'meal-prep', 'high-protein', 'budget'],
  calories: 420,
  macros: { protein: 28, carbs: 55, fat: 12 },
  coverImage:
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
  createdAt: '2025-08-10',
},
{
  id: 'nut-chicken-bento',
  category: 'nutrition',
  title: 'Teriyaki Chicken Bento',
  description:
    'Balanced lunchbox: chicken, brown rice, and steamed vegetables — great fuel for long lab days.',
  tags: ['lunch', 'bento', 'balanced', 'gluten-free'],
  calories: 610,
  macros: { protein: 38, carbs: 68, fat: 16 },
  coverImage:
    'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
  createdAt: '2025-08-11',
},

  {
    id: 'nut-veggie-wrap',
    category: 'nutrition',
    title: 'Roasted Veggie Wrap',
    description:
      'Fast wrap with hummus, capsicum, zucchini, and feta. 10-minute build.',
    tags: ['lunch', 'vegetarian', 'quick'],
    calories: 480,
    macros: { protein: 17, carbs: 58, fat: 18 },
    createdAt: '2025-08-05',
  },
  {
    id: 'nut-power-salad',
    category: 'nutrition',
    title: 'Quinoa Power Salad',
    description:
      'Quinoa, edamame, cherry tomatoes, lemon vinaigrette. Keeps well for two days.',
    tags: ['meal-prep', 'salad', 'high-fibre'],
    calories: 520,
    macros: { protein: 22, carbs: 66, fat: 14 },
    createdAt: '2025-08-09',
  },

  // ---------- Fitness ----------
  {
    id: 'fit-7min-full-body',
    category: 'fitness',
    title: '7-Minute Full-Body Primer',
    description:
      'No-equipment circuit, perfect between lectures. Warm-up + squats + pushups + plank.',
    tags: ['no-equipment', 'quick', 'beginner'],
    durationMinutes: 7,
    difficulty: 'easy',
    createdAt: '2025-08-01',
  },
  {
    id: 'fit-12min-core',
    category: 'fitness',
    title: '12-Minute Core Reset',
    description:
      'Core-focused routine to improve posture for long study sessions.',
    tags: ['core', 'posture', 'intermediate'],
    durationMinutes: 12,
    difficulty: 'moderate',
    createdAt: '2025-08-03',
  },
  {
    id: 'fit-20min-mobility',
    category: 'fitness',
    title: '20-Minute Hip & Shoulder Mobility',
    description:
      'Mobility flow to undo desk stiffness. Great end-of-day reset.',
    tags: ['mobility', 'flexibility', 'recovery'],
    durationMinutes: 20,
    difficulty: 'easy',
    createdAt: '2025-08-04',
  },
  {
    id: 'fit-campus-steps',
    category: 'fitness',
    title: 'Campus Steps Power Walk',
    description:
      'Low-impact cardio using campus stairs and ramps. Track steps for 15–25 minutes.',
    tags: ['cardio', 'outdoor', 'low-impact'],
    durationMinutes: 20,
    difficulty: 'easy',
    createdAt: '2025-08-12',
  },

  // ---------- Mind ----------
  {
    id: 'mind-2min-box-breathing',
    category: 'mind',
    title: '2-Minute Box Breathing',
    description:
      'Inhale 4 • Hold 4 • Exhale 4 • Hold 4. Repeat six rounds. Instant calm.',
    tags: ['breathing', 'focus', 'exam'],
    durationMinutes: 2,
    difficulty: 'easy',
    createdAt: '2025-08-02',
  },
  {
    id: 'mind-5min-reset',
    category: 'mind',
    title: '5-Minute Visual Reset',
    description:
      'Close eyes, soften jaw/shoulders, count breaths up to 20, restart focus.',
    tags: ['mindfulness', 'micro-break', 'study'],
    durationMinutes: 5,
    difficulty: 'easy',
    createdAt: '2025-08-08',
  },
  {
    id: 'mind-sleep-winddown',
    category: 'mind',
    title: 'Sleep Wind-Down Routine',
    description:
      'Gentle stretches + low light + slow nasal breathing. Prepare your body for sleep.',
    tags: ['sleep', 'night', 'recovery'],
    durationMinutes: 10,
    difficulty: 'easy',
    createdAt: '2025-08-06',
  },
  {
    id: 'mind-10min-body-scan',
    category: 'mind',
    title: '10-Minute Body Scan',
    description:
      'Top-to-toe awareness to reduce residual stress before bed.',
    tags: ['meditation', 'relax', 'anxiety'],
    durationMinutes: 10,
    difficulty: 'easy',
    createdAt: '2025-08-07',
  },

  // ---------- Posts (feed/articles/tips) ----------
  {
    id: 'post-hydration-hack',
    category: 'post',
    title: 'Hydration: The 1–Glass Rule',
    description:
      'Drink one glass before every meal to hit your daily total without thinking.',
    tags: ['tip', 'habit', 'hydration'],
    createdAt: '2025-08-05',
  },
  {
    id: 'post-stress-vs-fuel',
    category: 'post',
    title: 'Stressed? Eat for stable energy',
    description:
      'Pair complex carbs with lean protein to avoid crashes during deadlines.',
    tags: ['article', 'nutrition', 'stress'],
    createdAt: '2025-08-10',
  },
  {
    id: 'post-desk-ergonomics',
    category: 'post',
    title: 'Desk Ergonomics 101',
    description:
      'Neutral wrists, stacked joints, and screen at eye height = fewer headaches.',
    tags: ['article', 'posture', 'study'],
    createdAt: '2025-08-09',
  },
  {
    id: 'post-mini-habits',
    category: 'post',
    title: 'Mini-Habits That Stick',
    description:
      '2-minute rule to begin, anchor habits to existing routines, and celebrate small wins.',
    tags: ['habit', 'behavior', 'motivation'],
    createdAt: '2025-08-11',
  },
  {
    id: 'post-pre-exam-pack',
    category: 'post',
    title: 'Pre-Exam Pack: Fuel + Focus',
    description:
      'Simple checklist: water bottle, banana + yogurt, 2-min breathing before walk-in.',
    tags: ['exam', 'checklist', 'mind'],
    createdAt: '2025-08-12',
  },
];
