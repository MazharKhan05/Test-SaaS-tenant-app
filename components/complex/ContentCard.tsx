import { ContentCardData } from "@/lib/types/websiteManagement/page/components/complex/data";
import Header from "../Core/Header";
import Paragraph from "../Core/Paragraph";
import Link from "next/link";
import { Button } from "../Core/Button";

const ContentCard = ({
  data,
  isAdjacent,
}: {
  data: ContentCardData;
  isAdjacent?: boolean;
}) => {
  // console.log("contentCard...", data);
  return (
    <div
      className={`w-full p-2 ${
        isAdjacent && "flex flex-col justify-between p-4"
      }`}
      id={data.id}
    >
      <Link href="#">
        <Header data={data.header} />
      </Link>
      <Paragraph data={data.paragraph} />
      {data.button ? <Button data={data.button} /> : <></>}
    </div>
  );
};

export default ContentCard;
