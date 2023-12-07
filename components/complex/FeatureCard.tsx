import { FeatureCardData } from "@/lib/types/websiteManagement/page/components/complex/data";
import OurImage from "../Core/Image";
import ContentCard from "./ContentCard";

const FeatureCard = ({
  data,
  isAdjacent,
}: {
  data: FeatureCardData;
  isAdjacent?: boolean;
}) => {
  return (
    <div
      id={data.id}
      className={`bg-white border border-gray-200 rounded-lg shadow p-2 flex ${
        !isAdjacent ? "flex-col max-w-sm" : "max-w-2xl"
      } items-center`}
    >
      <OurImage data={data?.image} />
      <ContentCard data={data.contentCard} isAdjacent={isAdjacent} />
    </div>
  );
};

export default FeatureCard;
