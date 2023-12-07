import { TextBoxData } from "@/lib/types/websiteManagement/page/components/core/data";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Caption from "./Caption";

const TextBox = ({ data }: { data: TextBoxData }) => {
  switch (data.type) {
    case "HEADER":
      return (
        <Header data={{ id: data.id, type: data.type, text: data.text }} />
      );
    case "PARAGRAPH":
      return (
        <Paragraph data={{ id: data.id, type: data.type, text: data.text }} />
      );
    case "CAPTION":
      return (
        <Caption data={{ id: data.id, type: data.type, text: data.text }} />
      );
  }
};

export default TextBox;
