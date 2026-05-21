export type Source = {
  label: string;
  url: string;
  verifiedAt: string;
};

export type Exhibition = {
  year: string;
  title: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  sourceUrl: string;
};

export type Publication = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  sourceUrl: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type OralHistoryInterview = {
  name: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
};

export type CompositionTerm = {
  period: string;
  presidentTitle?: "Des." | "Desa.";
  president: string;
  dateRange: string;
  imageUrl: string;
  imageAlt: string;
  sourceUrl: string;
  members: string[];
};
