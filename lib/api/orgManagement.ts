import { Org } from "../types/orgManagement";

export const getOrgById = async (orgId: string) => {
    console.log(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/orgs/${orgId}`, "websitedomain for fetch")
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orgs/${orgId}`, {"cache": "no-store"}
    );
    if (res.ok) {
      const json = (await res.json()) as Org;
      console.log(json, "org jsonRes...")
      return json;
    }
    const errMessage = await res.text();
    throw new Error(errMessage);
  
    // const json = `{"domain":"${websiteDomain}", "appId": "00000000000000000000000000", "orgId": "00000000000000000000000000", "websiteId": "01HDS3Q6WYZZJ35CKCCDNWDCPM", "type": "TENANT"}`;
    // const res = JSON.parse(json) as WebsiteDomain;
    // return res;
  };