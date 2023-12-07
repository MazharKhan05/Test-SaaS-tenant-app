import { searchResult } from "@/lib/types/websiteManagement/page/components/complex/data";
import Paragraph from "../Core/Paragraph";
import {
  ButtonData,
  ParagraphData,
  SpanData,
} from "@/lib/types/websiteManagement/page/components/core/data";
import Link from "next/link";
import { TransformFQEnglishName } from "@/lib/utils/searchUtility";
import { MouseEvent } from "react";
import {
  CatOrgSearchedPhraseResult,
  GeoSearchedPhraseResult,
} from "@/lib/types/Location";
import Span from "../Core/Span";

export const SearchResult = ({
  selectResultHandler,
  result,
}: {
  selectResultHandler: (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    record: searchResult
  ) => void;
  result: searchResult;
}) => {
  // const titleData: ParagraphData = {
  //   id: result.resultId.text,
  //   text: TransformFQEnglishName(result.resultEnglishName.text),
  //   type: "PARAGRAPH",
  // };

  // const spanData: SpanData = {
  //   id: result.resultId.text,
  //   text: TransformFQEnglishName(result.resultEnglishName.text),
  //   type: "PARAGRAPH",
  // };

  // console.log("result of search...", result);
  return (
    <div
      id={result.resultId.text}
      className="px-4 py-2 flex flex-col items-start font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
      onClick={(e) => selectResultHandler(e, result)}
    >
      <Link href={`#`}>
        <Paragraph data={result.resultEnglishName} />
      </Link>
      <Span data={result.resultId} />
    </div>
  );
};
