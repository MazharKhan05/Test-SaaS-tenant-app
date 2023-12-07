import {  locationPrayerSchedule, GeoSearchedPhraseResult, CatOrgSearchedPhraseResult } from "../types/Location";
import { searchResult } from "../types/websiteManagement/page/components/complex/data";

// const getGeoChildren = async (geoSlug: string) => {
//   console.log(
//     `${process.env.NEXT_PUBLIC_API_ENDPOINT}/g/geos/${geoSlug}/children`
//   );
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_ENDPOINT}/g/geos/${geoSlug}/children`
//   );

//   if (res.ok) {
//     const json = (await res.json()) as ChildGeo[];

//     return json;
//   }

//   const errMessage = await res.text();

//   throw new Error(errMessage);
// };


const getPrayerScheduleByLocationId = async (locationId: string) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  const currentdate = `${year}-${month}-${day}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orgs/${locationId}/prayer-schedule`,
    {headers: {
      'date': currentdate
    }}
  );

  if (res.ok) { // res is OKAY, 200 status code
    const json = (await res.json()) as locationPrayerSchedule;
    console.log(json, 'prayer schedule orgRes...')
    return json;
  }
  const errMessage = await res.text();

  throw new Error(errMessage);
}

const getGeoSearchedPhraseSuggestions = async (phrase: string) => {
  console.log(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/g/geos/search?q=${phrase}`
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/g/geos/search?q=${phrase}`,
    {cache: "no-cache"}
  );
    
  if (res.ok) {
    const json = await res.json()
    // console.log("Res from search...", json)
    return json.map((rec : GeoSearchedPhraseResult, i:number)=>(
      {
        resultId: {
          id: `span-${i}`,
          text: rec.geoSlug,
          type: "SPAN",
        },
        resultEnglishName: {
          id: `paragraph-${i}`,
          text: rec.fqEnglishName,
          type: "PARAGRAPH",
        }
      }
    ));
  }

  const errMessage = await res.text();

  throw new Error(errMessage);
};

const getCatOrgSearchedPhraseSuggestions = async (phrase: string) => {
  // console.log(
  //   `${process.env.NEXT_PUBLIC_API_ENDPOINT}/g/geos/search?q=${phrase}`
  // );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orgs/search?q=${phrase}`,
    {cache: "no-cache"}
  );
    
  if (res.ok) {
    const json = await res.json()
    // console.log("Res from search...", json)
    return json.map((rec : CatOrgSearchedPhraseResult, i:number)=>(
      {
        resultId: {
          id: `span-${i}`,
          text: rec.catOrgId,
          type: "SPAN",
        },
        resultEnglishName: {
          id: `paragraph-${i}`,
          text: rec.catOrgEnglishName,
          type: "PARAGRAPH",
        }
      }
    ));
  }

  const errMessage = await res.text();

  throw new Error(errMessage);
};


export { getGeoSearchedPhraseSuggestions, getCatOrgSearchedPhraseSuggestions, getPrayerScheduleByLocationId };
