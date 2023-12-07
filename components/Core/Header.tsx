import { HeaderData } from "@/lib/types/websiteManagement/page/components/core/data";

const Header = ({
  data,
  isCentered,
}: {
  data: HeaderData;
  isCentered?: boolean;
}) => {
  // console.log("header content...", data);
  return (
    <h2
      id={data.id}
      className={` mb-2 text-2xl ${
        isCentered ? "text-center" : ""
      } font-semibold self-stretch capitalize tracking-tight text-gray-900`}
    >
      {data.text ? data.text : "Noteworthy technology acquisitions 2021"}
    </h2>
  );
};

export default Header;
