import { SubscribeToNewsletterData } from "@/lib/types/websiteManagement/page/components/block/data";
import { Jumbotron } from "../complex/Jumbotron";
import { Form } from "../complex/Form";
import { HeaderData } from "@/lib/types/websiteManagement/page/components/core/data";

export const SubscribeToNewsletter = ({
  params,
}: {
  params: SubscribeToNewsletterData;
}) => {
  return (
    <div className="p-4 min-w-md md:min-w-2xl flex justify-center mb-3">
      <div className="w-11/12 flex flex-col space-y-4">
        {params.introTextContent ? (
          <Jumbotron params={params.introTextContent} />
        ) : (
          <></>
        )}
        <Form params={params.form} />
      </div>
    </div>
  );
};
