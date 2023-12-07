import { NavigationMenuItem } from "../types/websiteManagement/navigationMenuItem";
import { Page } from "../types/websiteManagement/page";
import { Website } from "../types/websiteManagement/website";

const getNavMenuItems = async (websiteId: string, languageCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/w/nav-menu-items/by-lang?website=${websiteId}&lang=${languageCode}`,
    { cache: "no-store" }
  );
  if (res.ok) {
    const json = (await res.json()) as NavigationMenuItem[];
    return json;
  }
  const errMessage = await res.text();
  throw new Error(errMessage);
};

const getPage = async (
  websiteId: string,
  languageCode: string,
  route: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/w/pages/by-lang?website=${websiteId}&lang=${languageCode}&route=${route}`,
    { cache: "no-store" }
  );
  if (res.ok) {
    // const json = homeDescription as Page;
    const jsonRes = await res.json() as Page
    // console.log(jsonRes, 'cms jsonRes')
    return jsonRes;
  }
  const errMessage = await res.text();
  throw new Error(`Something went wrong...${errMessage}`);
};

const getWebsite = async (
  websiteId: string
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/w/websites/${websiteId}`, { cache: "no-store" });
  if (res.ok) {
    const jsonRes = await res.json() as Website
    console.log(jsonRes, 'website jsonRes')
    return jsonRes;
  }
  const errMessage = await res.text();
  throw new Error(`Something went wrong...${errMessage}`);
};

export {getWebsite, getNavMenuItems, getPage };
