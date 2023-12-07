import { LabelData } from "@/lib/types/websiteManagement/page/components/core/data";

export const Label = ({
  data,
  isCentered,
}: {
  data: LabelData;
  isCentered?: boolean;
}) => {
  return (
    <label
      id={data.id}
      className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
    >
      {data.text && data.text !== "" ? data.text : "default"}
    </label>
  );
};
