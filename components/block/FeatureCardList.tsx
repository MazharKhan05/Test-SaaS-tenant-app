import FeatureCard from "../complex/FeatureCard";
import { FeatureCardListData } from "@/lib/types/websiteManagement/page/components/block/data";

const FeatureCardList = ({ data }: { data: FeatureCardListData }) => {
  // console.log(data, "featured cards list");
  return (
    <div
      id={data.id}
      className="mb-3 p-4 min-w-md md:min-w-2xl flex justify-start flex-wrap gap-2"
    >
      {data.featureCards.length > 0 &&
        data.featureCards.map((fc) => (
          <FeatureCard key={fc.id} data={fc} isAdjacent={false} />
        ))}
    </div>
    // <Events />
  );
};

export default FeatureCardList;
