export type Source = {
  label: string;
  url: string;
  verifiedAt: string;
};

export type ImageRef = {
  src: string;
  alt: string;
  caption?: string;
  sourceUrl: string;
};

export type LinkItem = {
  label: string;
  url: string;
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
};

export type ManagementTerm = {
  period: string;
  president: string;
  url: string;
};
