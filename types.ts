
// Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  objective: string;
  strategy: string;
  keyDeliverables: string[];
  results: string;
  image: string;
}

export interface SlideData {
  type: 'title' | 'intro' | 'case-study' | 'strategy-proposal' | 'mockup' | 'interactive';
  title: string;
  content?: string | React.ReactNode;
  caseData?: CaseStudy;
  subtitle?: string;
}
