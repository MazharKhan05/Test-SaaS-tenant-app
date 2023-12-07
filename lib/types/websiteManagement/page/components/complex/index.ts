import { ComponentBase } from "../base";
import { 
        CaptionedImageData, 
        ContentCardData, 
        FeatureCardData, 
        HeroSectionTextData, 
        JumbotronData, 
        PrayerScheduleData, 
        SearchData, 
        TableData, 
        TitledUnorderedListData, 
        UnorderedListData 
      } from "./data";

type ComplexComponentBase = ComponentBase & {
  type: "COMPLEX_COMPONENT";
};

export type FeatureCardComponent = ComplexComponentBase & {
  name: "Feature Card";
  data: FeatureCardData;
};
export type CaptionedImageComponent = ComplexComponentBase & {
  name: "Captioned Image";
  data: CaptionedImageData;
};
export type ContentCardComponent = ComplexComponentBase & {
  name: "Content Card";
  data: ContentCardData;
};

export type HeroSectionTextComponent = ComplexComponentBase & {
  name: "HeroSection Text",
  data: HeroSectionTextData
};

export type JumbotronComponent = ComplexComponentBase & {
  name: "Jumbotron",
  data: JumbotronData
};


export type TitledUnorderedListComponent = ComplexComponentBase & {
  name: "Titled Unordered List";
  data: TitledUnorderedListData;
};

export type PrayerScheduleComponent = ComplexComponentBase & {
  name: "Prayer Schedule",
  data: PrayerScheduleData
}

export type SearchComponent = ComplexComponentBase & {
  name: "Search",
  data: SearchData
};