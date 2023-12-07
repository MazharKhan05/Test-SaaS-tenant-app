import { InputData } from "@/lib/types/websiteManagement/page/components/core/data";
import { ChangeEvent } from "react";

export const Input = ({
  data,
  setInputFieldText,
}: {
  setInputFieldText: (e: ChangeEvent<HTMLInputElement>) => void;
  data: InputData;
}) => {
  return (
    <input
      type={data.inputType}
      id={data.id}
      className="shadow-sm bg-white border-none text-gray-900 text-sm rounded-lg w-full p-2.5"
      placeholder={data.placeHolder}
      required={data.isRequired}
      onChange={setInputFieldText}
      value={data.value}
    />
  );
};
