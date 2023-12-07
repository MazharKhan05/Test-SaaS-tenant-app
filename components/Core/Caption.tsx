import { CaptionData } from "@/lib/types/websiteManagement/page/components/core/data";

const Caption = ({ data }: { data: CaptionData }) => {
  return <span id={data.id}>{data.text}</span>;
};

export default Caption;
