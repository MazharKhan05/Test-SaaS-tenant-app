import { UnorderedListContentData } from "@/../../lib/types/Component/Core";
import { TitledUnorderedListData } from "@/lib/types/websiteManagement/page/components/complex/data";
import React from "react";
import Header from "../Core/Header";
import { UnorderedList } from "../Core/UnorderedList";

export const TitledUnorderedList = ({
  params,
}: {
  params: TitledUnorderedListData;
}) => {
  // console.log(params, "Param for list...");
  return (
    <div
      id={params.id}
      className="min-w-md md:min-w-2xl flex flex-col justify-start gap-[31px] mt-3"
    >
      <Header data={params.title} />
      <UnorderedList param={params.unorderedList} />
    </div>
  );
};
