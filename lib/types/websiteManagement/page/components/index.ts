import { CaptionedImageListComponent, FeatureCardListComponent, FeaturedEventsComponent, HeroSectionComponent, JumbotronWithBackgroundImageComponent, SearchSectionComponent, SubscribeToNewsletterComponent } from "./block";
import { FeatureCardListData } from "./block/data";
import {
  CaptionedImageComponent,
  ContentCardComponent,
  FeatureCardComponent,
  JumbotronComponent,
  PrayerScheduleComponent,
  TitledUnorderedListComponent,
} from "./complex";
import {
  ButtonComponent,
  DividerComponent,
  ImageComponent,
  SpacerComponent,
  TextBoxComponent,
} from "./core";

export type Component =
  | ButtonComponent
  | ImageComponent
  | DividerComponent
  | SpacerComponent
  | TextBoxComponent
  | SearchSectionComponent
  | FeatureCardComponent
  | CaptionedImageComponent
  | ContentCardComponent
  | FeatureCardListComponent
  | FeaturedEventsComponent
  | CaptionedImageListComponent 
  | PrayerScheduleComponent
  | HeroSectionComponent 
  | TitledUnorderedListComponent
  | JumbotronComponent 
  | JumbotronWithBackgroundImageComponent
  | SubscribeToNewsletterComponent;
