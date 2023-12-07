import { ComponentBase } from "../base";
import { CaptionedImageListData, DonationCategoriesData, FeatureCardListData, FeaturedEventsData, HeroSectionData, JumbotronWithBackgroundImageData, SearchSectionData, SubscribeToNewsletterData } from "./data";

type BlockComponentBase = ComponentBase & {
  type: "BLOCK_COMPONENT";
};

export type HeroSectionComponent = BlockComponentBase & {
  name: "Hero Section";
  data: HeroSectionData;
};
export type SearchSectionComponent = BlockComponentBase & {
  name: "Search Section";
  data: SearchSectionData;
};

export type FeaturedEventsComponent = BlockComponentBase & {
  name: "Featured Events";
  data: FeaturedEventsData;
}

export type DonationCategoriesComponent = BlockComponentBase & {
  name: "Donation Categories";
  data: DonationCategoriesData;
}

export type JumbotronWithBackgroundImageComponent = BlockComponentBase & {
  name: "Jumbotron With Background Image",
  data: JumbotronWithBackgroundImageData
};

export type FeatureCardListComponent = BlockComponentBase & {
  name: "Feature Cards";
  data: FeatureCardListData;
};
export type CaptionedImageListComponent = BlockComponentBase & {
  name: "Captioned Images";
  data: CaptionedImageListData;
};

export type SubscribeToNewsletterComponent = BlockComponentBase & {
  name: "Subscribe To Newsletter";
  data: SubscribeToNewsletterData;
};
