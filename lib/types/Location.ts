// type ChildGeo = {
//   geoSlug: string;
//   fqEnglishName: string;
//   locCode: string;
//   locLocaleName: string;
//   levelName: string;
//   levelNumber: number;
// };

type locationPrayerSchedule ={
  locationId: string,
  calculationDate: string,
  timings: prayerTiming[]
};
type prayerTiming = {
  prayerName: string,
  azan: string,
  iqamah: string 
};

type GeoSearchedPhraseResult = {
  geoSlug: string;
  fqEnglishName: string;
};

type CatOrgSearchedPhraseResult = {
  catOrgId: string;
  catOrgEnglishName: string;
};

export type { GeoSearchedPhraseResult, CatOrgSearchedPhraseResult, locationPrayerSchedule };
