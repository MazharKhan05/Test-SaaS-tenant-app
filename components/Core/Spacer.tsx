import { SpacerData } from "@/lib/types/websiteManagement/page/components/core/data";

const Spacer = ({ data }: { data: SpacerData }) => {
  return <div id={data.id} style={{ height: data.height }}></div>;
};

export default Spacer;
