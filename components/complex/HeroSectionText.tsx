//TODO: Implement this comp in backend
// import { HeroSectionTextContent } from "@/lib/types/component/Core";
import React from "react";
import { Button } from "../Core/Button";
import Paragraph from "../Core/Paragraph";
import Header from "../Core/Header";
import { HeroSectionTextData } from "@/lib/types/websiteManagement/page/components/complex/data";

export const HeroSectionText = ({
  params,
}: {
  params: HeroSectionTextData;
}) => {
  // console.log("In heroSection text", JSON.stringify(params));

  return (
    <div
      id={params.id}
      className="w-full p-3 flex flex-col justify-start items-start gap-6"
    >
      <Header data={params.header} />
      <Paragraph data={params.paragraph} />
      {/* Make button optional with bool */}
      <Button data={params.button} />
    </div>
  );
};
