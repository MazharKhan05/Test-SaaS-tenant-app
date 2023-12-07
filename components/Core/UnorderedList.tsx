import { UnorderedListData } from "@/lib/types/websiteManagement/page/components/complex/data";
import Span from "./Span";

export const UnorderedList = ({ param }: { param: UnorderedListData }) => {
  return (
    <ul id={param.id} className="space-y-1 text-gray-500 list-disc list-inside">
      {param.listItems.length > 0 &&
        param.listItems.map((item) => (
          <li key={item.id} className="self-stretch">
            {item.text ? <Span data={item.text} /> : <></>}
          </li>
        ))}
    </ul>
  );
};
