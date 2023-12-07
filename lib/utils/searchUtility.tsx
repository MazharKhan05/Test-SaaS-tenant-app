export const TransformFQEnglishName = (FQEnglishName: string) => {
  if (!FQEnglishName) return "";
  if (!FQEnglishName.includes("_")) return FQEnglishName;
  const splittedFQEnglishName = FQEnglishName.split("_");
  return splittedFQEnglishName.join(" > ");
};

export const GetSelectedGeo = (FQEnglishName: string) => {
  if (!FQEnglishName) return "";
  if (!FQEnglishName.includes("_")) return FQEnglishName;
  const splittedFQEnglishName = FQEnglishName.split("_");
  return splittedFQEnglishName[splittedFQEnglishName.length - 1];
};

// export const TransformGeoSlugToUrlRoute = (GeoSlug) => {
// const splittedGeoSlug = GeoSlug.split("_");
// return splittedGeoSlug.slice(1, splittedGeoSlug.length).join("/");
// };

// export const GetGeoHierarchyByGeoSlug = (GeoSlug) => {
// const splittedGeoSlug = GeoSlug.split("_");
// return splittedGeoSlug.slice(1, splittedGeoSlug.length);
// };
