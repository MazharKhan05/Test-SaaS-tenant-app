type CardContentData = {
  title: string | null;
  description: string;
  imageUrl: string | null;
  padding: number;
  size: number;
};

type UnorderedListContentData = {
  title: string;
  lists: Array<string>;
};

type TableContentData = {
  headerColumns: Array<string>;
  rows: Array<Array<string>>;
};
type HeroSectionTextContentData = {
  title: string;
  description: string | null;
};

export type {
  CardContentData,
  UnorderedListContentData,
  TableContentData,
  HeroSectionTextContentData,
};
