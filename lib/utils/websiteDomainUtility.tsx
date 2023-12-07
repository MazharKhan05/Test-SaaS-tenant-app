import { redirect } from "next/navigation";
import { getWebsiteDomain } from "../api/domainManagementApi";

export const getWebsiteId = async (websiteDomain: string): Promise<string> => {
  if (!websiteDomain) throw new Error("Website domain not provided...");
  const websiteDomainData = await getWebsiteDomain(websiteDomain);
  // console.log(websiteDomainData);

  if (websiteDomainData.type === "HREDIRECT") {
    redirect(websiteDomainData.redirectLink);
  } else if (websiteDomainData.type == "SREDIRECT") {
    //TODO: Add this functionality of resolving tenant domain in backend
    return await getWebsiteId(websiteDomainData.redirectLink);
  } else if (websiteDomainData.type == "TENANT") {
    return websiteDomainData.websiteId;
  }
  throw new Error("Invalid Website Type!");
};
