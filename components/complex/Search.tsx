"use client";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {
  getCatOrgSearchedPhraseSuggestions,
  getGeoSearchedPhraseSuggestions,
} from "../../lib/api/LocationApi";
import {
  CatOrgSearchedPhraseResult,
  GeoSearchedPhraseResult,
} from "../../lib/types/Location";
import { SearchResultSet } from "./SearchResultSet";
import {
  SearchData,
  searchResult,
} from "@/lib/types/websiteManagement/page/components/complex/data";
import { GetSelectedGeo } from "@/lib/utils/searchUtility";
import { Input } from "../Core/Input";
import { InputData } from "@/lib/types/websiteManagement/page/components/core/data";

const Search = ({ data }: { data: SearchData }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResultRecords, setSearchResultRecords] = useState<
    searchResult[]
  >(Array<searchResult>(0));
  const [selectedRecord, setSelectedRecord] = useState({
    Id: "",
    EnglishName: "",
  });
  const inputFieldData: InputData = {
    inputType: data.searchInput.inputType,
    id: data.searchInput.id,
    placeHolder: data.searchInput.placeHolder,
    isRequired: data.searchInput.isRequired,
    changeEventHandler: function (e) {
      setSearchPhrase(e.target.value);
    },
    value: searchPhrase,
  };

  const setInputFieldText = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchPhrase(e.target.value);
  };
  useEffect(() => {
    const getSearchResultSetBySearchPhrase = async () => {
      // const apiRes = await getGeoSearchedPhraseSuggestions(searchPhrase);

      if (data.searchInput.placeHolder.toLowerCase().includes("orgs")) {
        console.log("searchPhrase text...", searchPhrase);
        const PhraseSuggestions = await getCatOrgSearchedPhraseSuggestions(
          searchPhrase
        );
        if (PhraseSuggestions.length > 0) {
          setSearchResultRecords(PhraseSuggestions);
        }
      } else {
        const PhraseSuggestions = await getGeoSearchedPhraseSuggestions(
          searchPhrase
        );

        if (PhraseSuggestions.length > 0) {
          setSearchResultRecords(PhraseSuggestions);
        }
      }
    };
    if (searchPhrase.length > 1) {
      getSearchResultSetBySearchPhrase();
    } else if (searchPhrase.length === 0) {
      if (searchPhrase.length === 0) {
        setSearchResultRecords([]);
      }
    }
  }, [searchPhrase.length, searchPhrase]);

  const handleResultSelection = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    record: searchResult
  ) => {
    e.preventDefault();
    setSelectedRecord({
      Id: record.resultId.text,
      EnglishName: record?.resultEnglishName.text,
    });
    setSearchPhrase(
      record?.resultEnglishName.text.includes("_")
        ? GetSelectedGeo(record?.resultEnglishName.text)
        : record?.resultEnglishName.text
    );
    setSearchResultRecords([]);
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="relative w-full">
        <div className="flex items-center bg-white px-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {/* <input
            type={data.searchInput.inputType}
            id={data.searchInput.id}
            className="w-full border-none text-sm text-gray-900"
            placeholder={data.searchInput.placeHolder}
            onChange={(e) => setSearchPhrase(e.target.value)}
            value={searchPhrase}
          /> */}
          <Input setInputFieldText={setInputFieldText} data={inputFieldData} />
        </div>

        {/* <div className="w-fit absolute top-50  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          {searchResultRecords &&
            searchResultRecords.length > 0 &&
            searchResultRecords.map((record) => (
              <div
                key={record.resultId}
                id={record.resultId}
                className="px-4 py-2 flex flex-col items-start font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
              >
                <div aria-current="true">{record.resultEnglishName}</div>
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-xs text-gray-400">
                    {record.resultEnglishName}
                  </span>

                  <a href={`#`}>
                    <button className="py-1 px-2 text-xs bg-gray-300 hover:bg-gray-500 hover:text-white border-1 rounded">
                      {" "}
                      Go
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div> */}
        {searchResultRecords && searchResultRecords.length > 0 && (
          <SearchResultSet
            selectResultHandler={handleResultSelection}
            searchResultSet={searchResultRecords}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
