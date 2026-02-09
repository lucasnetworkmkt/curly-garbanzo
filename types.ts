export enum StepType {
  NARRATIVE = 'NARRATIVE',
  QUIZ = 'QUIZ',
  PROCESSING = 'PROCESSING',
  DIAGNOSIS = 'DIAGNOSIS',
  FINAL = 'FINAL'
}

export interface StepConfig {
  id: number;
  type: StepType;
  title?: string;
  content?: string[]; // Array of paragraphs
  image?: string;
  imageCaption?: string;
  ctaText?: string; // Button text
  options?: string[]; // For quiz questions
  duration?: number; // For processing step (seconds)
  redirectUrl?: string; // For final step
}
