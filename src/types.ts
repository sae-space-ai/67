export interface Section {
  id: string;
  number: string;
  title: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | ParagraphBlock
  | SubsectionBlock
  | HighlightBlock
  | BoxBlock;

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface SubsectionBlock {
  type: 'subsection';
  title: string;
  text?: string;
  table?: TableData;
  list?: string[];
  orderedList?: string[];
  highlight?: string;
  warning?: string;
  box?: BoxData;
  card?: CardData;
  closing?: string;
}

export interface HighlightBlock {
  type: 'highlight';
  title: string;
  text: string;
  list: string[];
}

export interface BoxBlock {
  type: 'box';
  variant: 'success' | 'warning' | 'critical' | 'highlight';
  title?: string;
  text: string;
  orderedList?: string[];
  closing?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface BoxData {
  variant: 'success' | 'warning' | 'critical' | 'highlight';
  title?: string;
  text: string;
  list?: string[];
  closing?: string;
}

export interface CardData {
  title: string;
  text: string;
  list: string[];
  closing?: string;
}
