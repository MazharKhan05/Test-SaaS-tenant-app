import { Button } from "../Core/Button";
import Search from "../complex/Search";
import { SearchSectionData } from "@/lib/types/websiteManagement/page/components/block/data";

export const SearchSection = ({ data }: { data: SearchSectionData }) => {
  return (
    <div
      id={data.id}
      className="mb-3 p-4 flex flex-col space-y-4 md:items-center md:flex-row md:space-x-2 lg:space-x-4"
    >
      <Search
        data={{
          id: data.orgCategorySearchInput.id,
          searchInput: {
            id: data.orgCategorySearchInput.searchInput.id,
            inputType: data.orgCategorySearchInput.searchInput.inputType,
            value: "",
            placeHolder: data.orgCategorySearchInput.searchInput.placeHolder,
            isRequired: data.orgCategorySearchInput.searchInput.isRequired,
          },
          searchResultSet: {
            id: data.orgCategorySearchInput.searchResultSet.id,
            searchResults:
              data.orgCategorySearchInput.searchResultSet.searchResults,
          },
        }}
      />
      <Search
        data={{
          id: data.geoLocSearchInput.id,
          searchInput: {
            id: data.geoLocSearchInput.searchInput.id,
            inputType: data.geoLocSearchInput.searchInput.inputType,
            value: "",
            placeHolder: data.geoLocSearchInput.searchInput.placeHolder,
            isRequired: data.geoLocSearchInput.searchInput.isRequired,
          },
          searchResultSet: {
            id: data.geoLocSearchInput.searchResultSet.id,
            searchResults: data.geoLocSearchInput.searchResultSet.searchResults,
          },
        }}
      />
      <Button
        data={{
          id: data.searchButton.id,
          label: data.searchButton.label,
          redirectTo: data.searchButton.redirectTo,
        }}
      />
    </div>
  );
};
