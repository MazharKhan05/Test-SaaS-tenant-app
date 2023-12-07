import { JumbotronData } from "@/lib/types/websiteManagement/page/components/complex/data";
import Header from "../Core/Header";
import Paragraph from "../Core/Paragraph";
import { Button } from "../Core/Button";
import { JumbotronWithBackgroundImageData } from "@/lib/types/websiteManagement/page/components/block/data";

export const JumbotronWithBackgroundImage = ({
  params,
}: {
  params: JumbotronWithBackgroundImageData;
}) => {
  // console.log("jumbotron content...", params);
  return (
    <section
      className={`h-80 min-w-md md:min-w-2xl bg-cover bg-center bg-no-repeat
       bg-[url('https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/01HFH51W3W58BQ2NNPGSB7GRYD.jpeg')]`}
    >
      <div className="h-full flex justify-center items-center gap-4 mb-3">
        {/* <Header data={params.title} isCentered={true} />
        <Paragraph data={params.description} isCentered={true} /> */}
        <Button data={params.button} />
      </div>
    </section>
  );
};
