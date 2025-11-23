/**
 * Lesson Store
 *
 * Manages all lesson data loaded from transformed Markdown content.
 */

import { create } from 'zustand';
import { LessonData } from '@content/types';

interface LessonStore {
  lessons: LessonData[];
  setLessons: (lessons: LessonData[]) => void;
  getLessonById: (id: string) => LessonData | undefined;
  getLessonsByZone: (zone: string) => LessonData[];
}

export const useLessonStore = create<LessonStore>((set, get) => ({
  lessons: [],

  setLessons: (lessons) => set({ lessons }),

  getLessonById: (id) => {
    return get().lessons.find((lesson) => lesson.id === id);
  },

  getLessonsByZone: (zone) => {
    return get().lessons.filter((lesson) => lesson.zone === zone);
  },
}));
