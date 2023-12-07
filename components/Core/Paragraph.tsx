import { ParagraphData } from "@/lib/types/websiteManagement/page/components/core/data";

const Paragraph = ({
  data,
  isCentered,
}: {
  data: ParagraphData;
  isCentered?: boolean;
}) => {
  // console.log("paragrapgh content...", data);
  return (
    <p
      id={data.id}
      className={`mb-3 font-normal ${
        isCentered ? "text-center" : ""
      } self-stretch text-lg font-['Lexend'] leading-[30px] text-gray-800`}
    >
      {data.text
        ? data.text
        : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
    </p>
  );
};

export default Paragraph;
