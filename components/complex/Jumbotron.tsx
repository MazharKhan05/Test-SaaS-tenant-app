import { JumbotronData } from "@/lib/types/websiteManagement/page/components/complex/data";
import Header from "../Core/Header";
import Paragraph from "../Core/Paragraph";

export const Jumbotron = ({ params }: { params: JumbotronData }) => {
  // console.log("jumbotron content...", params);
  return (
    <div className="min-w-md md:min-w-2xl flex flex-col items-center gap-4 mb-3">
      <Header data={params.title} isCentered={true} />
      {/* <div className="w-[50px] h-[0px] border-2 border-teal-600"></div> */}
      <Paragraph data={params.description} isCentered={true} />
    </div>
  );
};
