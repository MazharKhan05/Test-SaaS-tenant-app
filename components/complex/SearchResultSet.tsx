import { searchResult } from "@/lib/types/websiteManagement/page/components/complex/data";
import { SearchResult } from "./SearchResult";
import { MouseEvent } from "react";
import {
  CatOrgSearchedPhraseResult,
  GeoSearchedPhraseResult,
} from "@/lib/types/Location";

export const SearchResultSet = ({
  selectResultHandler,
  searchResultSet,
}: {
  selectResultHandler: (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    record: searchResult
  ) => void;
  searchResultSet: Array<searchResult>;
}) => {
  // console.log("result of searchResult Set...", searchResultSet);
  return (
    <div className="w-fit absolute top-50  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      {searchResultSet &&
        searchResultSet.length > 0 &&
        searchResultSet.map((record) => (
          //   <div
          //     key={record.resultId}
          //     id={record.resultId}
          //     className="px-4 py-2 flex flex-col items-start font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          //   >
          //     <div aria-current="true">{record.resultEnglishName}</div>
          //     <div className="flex flex-row items-center space-x-2">
          //       <span className="text-xs text-gray-400">
          //         {record.resultEnglishName}
          //       </span>

          //       <a href={`#`}>
          //         <button className="py-1 px-2 text-xs bg-gray-300 hover:bg-gray-500 hover:text-white border-1 rounded">
          //           {" "}
          //           Go
          //         </button>
          //       </a>
          //     </div>
          //   </div>
          <SearchResult
            selectResultHandler={selectResultHandler}
            key={record.id}
            result={record}
          />
        ))}
    </div>
  );
};
