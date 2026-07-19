export interface EmotionalAnalysis {
  primaryEmotion: string;
  secondaryEmotion: string;
  conflict: string;
  fear: string;
  hiddenDesire: string;
  psychologicalPattern: string;
  narrativeArchetype: string;
  heroStage: string;
}

export interface StoryParallel {
  title: string;
  character: string;
  source: string;
  quote: string;
  quoteAuthor?: string;
  storyParallel: string;
  whyItFits: string;
  reflection: string;
  lifeLesson: string;
}

export interface SimilarStory {
  character: string;
  source: string;
  reason: string;
}

export interface Recommendations {
  books: string[];
  movies: string[];
  games: string[];
  philosophy: string[];
}

export interface Reflection {
  id: string;
  userInput: string;
  createdAt: string;
  analysis: EmotionalAnalysis;
  primaryMatch: StoryParallel;
  similarStories: SimilarStory[];
  recommendations: Recommendations;
  closingThought: string;
}

export interface Character {
  id: string;
  name: string;
  source: string;
  category: string;
  emotions: string[];
  quote: string;
  description: string;
  themes: string[];
}

export interface Story {
  id: string;
  title: string;
  source: string;
  category: string;
  description: string;
  themes: string[];
  characters: string[];
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  source: string;
  themes: string[];
}
