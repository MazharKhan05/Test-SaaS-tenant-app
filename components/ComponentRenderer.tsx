import { Component } from "@/lib/types/websiteManagement/page/components";
import CaptionedImageList from "@/components/block/CaptionedImageList";
import FeatureCardList from "@/components/block/FeatureCardList";
import OurImage from "@/components/Core/Image";
import Divider from "@/components/Core/Divider";
import Spacer from "@/components/Core/Spacer";
import TextBox from "@/components/Core/TextBox";
import FeatureCard from "@/components/complex/FeatureCard";
import CaptionedImage from "@/components/complex/CaptionedImage";
import ContentCard from "@/components/complex/ContentCard";
import { HeroSectionImageRightSide } from "./block/HeroSectionImageRightSide";
import { TitledUnorderedList } from "./complex/TitledUnorderedList";
import { Jumbotron } from "./complex/Jumbotron";
import { SubscribeToNewsletter } from "./block/SubscribeToNewsletter";
import { Button } from "./Core/Button";
import { SearchSection } from "./block/SearchSection";
import { PrayerSchedule } from "./MasjidSaaS/PrayerSchedule";
import { JumbotronWithBackgroundImage } from "./block/JumbotronWithBackgroundImage";
import { FeaturedEvents } from "./block/FeaturedEvents";

const ComponentRenderer = ({
  component,
  tenantOrgId,
}: {
  component: Component;
  tenantOrgId?: string;
}) => {
  console.log("component about to render...", component);
  switch (component.name) {
    case "Button":
      return <Button data={component.data} />;
    case "Image":
      return <OurImage data={component.data} />;
    case "Divider":
      return <Divider data={component.data} />;
    case "Spacer":
      return <Spacer data={component.data} />;
    case "Text Box":
      return <TextBox data={component.data} />;
    case "Search Section":
      return <SearchSection data={component.data} />;
    case "Feature Card":
      return <FeatureCard data={component.data} />;
    case "Captioned Image":
      return <CaptionedImage data={component.data} />;
    case "Content Card":
      return <ContentCard data={component.data} />;
    case "Feature Cards":
      return <FeatureCardList data={component.data} />;
    case "Featured Events":
      return <FeaturedEvents data={component.data} />;
    case "Captioned Images":
      return <CaptionedImageList data={component.data} />;
    case "Prayer Schedule":
      return (
        <PrayerSchedule
          data={component.data}
          tenantOrgId={tenantOrgId ? tenantOrgId : "01HA95HCD4AF2S0S0V8Z9P4CJD"}
        />
      );
    case "Hero Section":
      return <HeroSectionImageRightSide params={component.data} />;
    case "Jumbotron With Background Image":
      return <JumbotronWithBackgroundImage params={component.data} />;
    case "Jumbotron":
      return <Jumbotron params={component.data} />;
    case "Titled Unordered List":
      return <TitledUnorderedList params={component.data} />;
    case "Subscribe To Newsletter":
      return <SubscribeToNewsletter params={component.data} />;
  }
};

export default ComponentRenderer;
