import { SpanData } from "@/lib/types/websiteManagement/page/components/core/data";

const Span = ({
  data,
  isCentered,
}: {
  data: SpanData;
  isCentered?: boolean;
}) => {
  // console.log("paragrapgh content...", data);
  return (
    <span
      id={data.id}
      className={`mb-2 font-normal ${
        isCentered ? "text-center" : ""
      } self-stretch text-sm text-gray-400`}
    >
      {data.text ? data.text : "default text"}
    </span>
  );
};

export default Span;
