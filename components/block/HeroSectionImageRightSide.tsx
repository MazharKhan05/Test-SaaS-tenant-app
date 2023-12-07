import OurImage from "../Core/Image";
import { HeroSectionText } from "../complex/HeroSectionText";
import { HeroSectionData } from "@/lib/types/websiteManagement/page/components/block/data";

export const HeroSectionImageRightSide = ({
  params,
}: {
  params: HeroSectionData;
}) => {
  // console.log("In heroSection rightside Img", JSON.stringify(params));
  //   const heroSectionText: HeroSectionTextContent = {
  //     title: params.Title,
  //     description: params?.Description,
  //   };
  //   const customImageContent: CustomImageContent = {
  //     imageUrl: params?.ImgUrl,
  //     imageWidth: null,
  //     imageHeight: 354,
  //   };
  // 1440 * 2
  return (
    <div className="mb-3 p-4 min-w-md md:min-w-2xl flex flex-col md:flex-row items-center md:justify-between gap-4 ">
      <HeroSectionText params={params.heroSectionContent} />
      <div className="w-full md:w-2/5 lg:w-2/6">
        <OurImage data={params.image} />
      </div>
      {/* <TitledUnorderedList /> */}
    </div>
  );
};
