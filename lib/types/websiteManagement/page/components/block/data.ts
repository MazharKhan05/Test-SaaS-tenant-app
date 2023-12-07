import { ComponentBaseData } from "../base";
import { CaptionedImageData, FeatureCardData, FormData, HeroSectionTextData, JumbotronData, SearchData } from "../complex/data";
import { ButtonData, HeaderData, ImageData, ParagraphData, SpanData } from "../core/data";

export type CaptionedImageListData = ComponentBaseData & {
  captionedImages: CaptionedImageData[];
};

export type FeaturedEventsData = ComponentBaseData & {
  title: HeaderData,
  eventCardList: Array<FeatureCardData>
}

export type DonationCategoriesData = ComponentBaseData & {
  categories: Array<SpanData>
}

export type JumbotronWithBackgroundImageData = ComponentBaseData & {
  backgroundImageUrl: string,
  title?: HeaderData,
  description?: ParagraphData,
  button: ButtonData
};

export type FeatureCardListData = ComponentBaseData & {
  featureCards: FeatureCardData[];
};

export type HeroSectionData = ComponentBaseData & {
  image: ImageData,
  heroSectionContent: HeroSectionTextData
};

export type SearchSectionData = ComponentBaseData & {
  orgCategorySearchInput: SearchData,
  geoLocSearchInput: SearchData,
  searchButton: ButtonData
}

export type SubscribeToNewsletterData = ComponentBaseData & {
  introTextContent?: JumbotronData,
  form: FormData
};
