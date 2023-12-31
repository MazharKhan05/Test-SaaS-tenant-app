import { ButtonData } from "@/lib/types/websiteManagement/page/components/core/data";
import React from "react";

export const Button = ({ data }: { data: ButtonData }) => {
  // console.log(data, "btn data...");
  if (data) {
    return (
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
      font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
      focus:outline-none dark:focus:ring-blue-800"
      >
        {data.label !== "" ? data.label : "Submit"}
      </button>
    );
  } else return <></>;
};
