
export interface Example {
  en: string;
  vi: string;
}

export interface TableRow {
  header: string;
  items: string[];
}

export interface GrammarTopic {
  title: string;
  description?: string;
  structure?: string | string[];
  examples?: Example[];
  subTopics?: GrammarTopic[];
  spellingRules?: { rule: string; example: string }[];
  table?: {
    headers: string[];
    rows: TableRow[];
  };
}

export interface Exercise {
  type: 'multiple-choice';
  question: string;
  options: string[];
  answer: string;
}

export interface GrammarUnit {
  id: string;
  title: string;
  topics: GrammarTopic[];
  exercises: Exercise[];
}
