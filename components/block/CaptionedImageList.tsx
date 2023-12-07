import { CaptionedImageListData } from "@/lib/types/websiteManagement/page/components/block/data";
import CaptionedImage from "../complex/CaptionedImage";

const CaptionedImageList = ({ data }: { data: CaptionedImageListData }) => {
  return (
    <div id={data.id}>
      {data.captionedImages.map((ci) => (
        <CaptionedImage key={ci.id} data={ci} />
      ))}
    </div>
  );
};

export default CaptionedImageList;
