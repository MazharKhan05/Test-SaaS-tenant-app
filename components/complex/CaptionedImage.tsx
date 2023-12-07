import { CaptionedImageData } from "@/lib/types/websiteManagement/page/components/complex/data";
import OurImage from "../Core/Image";
import Caption from "../Core/Caption";

const CaptionedImage = ({ data }: { data: CaptionedImageData }) => {
  return (
    <div id={data.id}>
      <OurImage data={data.image} />
      <Caption data={data.caption} />
    </div>
  );
};

export default CaptionedImage;
