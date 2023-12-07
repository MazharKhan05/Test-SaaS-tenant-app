import { DividerData } from "@/lib/types/websiteManagement/page/components/core/data";

const Divider = ({ data }: { data: DividerData }) => {
  return (
    <div id={data.id}>
      <div className="h-[1px] w-3/4 bg-black m-auto"></div>
    </div>
  );
};

export default Divider;
