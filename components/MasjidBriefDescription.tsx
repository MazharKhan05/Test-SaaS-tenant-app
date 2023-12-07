import { ContentCardData } from "@/lib/types/websiteManagement/page/components/complex/data";
import Link from "next/link";
import Header from "./Core/Header";

export const MasjidBriefDescription = ({ data }: { data: ContentCardData }) => {
  return (
    <div className="min-w-md md:min-w-2xl flex-col justify-start items-center gap-[31px] flex mt-3">
      <Link href="#">
        <Header data={data.header} />
      </Link>
      <div className="w-[50px] h-[0px] border-2 border-teal-600"></div>
      {/* <div className="self-stretch text-center text-black text-xl font-normal font-['Crimson Text']">
        {description
          ? description
          : "At MasjidSaaS.com, we are dedicated to bridging the gap between masjids and their communities. Learn about our mission, values, and commitment to providing cutting-edge solutions for masjids worldwide."}
        <br />
      </div> */}
    </div>
  );
};
