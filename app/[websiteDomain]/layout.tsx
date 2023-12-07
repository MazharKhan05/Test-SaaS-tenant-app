import { getWebsiteDomain } from "@/lib/api/domainManagementApi";
import { getNavMenuItems, getWebsite } from "@/lib/api/websiteManagementApi";
import { Footer } from "@/components/HighLevel/Complex/Footer";
import { getOrgById } from "@/lib/api/orgManagement";
import { AppHeader } from "@/components/HighLevel/Complex/AppHeader";
import { HeaderContent } from "@/lib/types/Component/HighLevel/Complex";

const getWebsiteId = async (websiteDomain: string): Promise<string> => {
  //TODO: hardredirects becomes softredirects
  const domain = await getWebsiteDomain(websiteDomain);
  if (domain.type === "HREDIRECT" || domain.type == "SREDIRECT") {
    // redirect(domain.redirectLink);
    return await getWebsiteId(domain.redirectLink);
  }
  //  else if (domain.type == "SREDIRECT") {
  //   return await getWebsiteId(domain.redirectLink);
  // }
  else if (domain.type == "TENANT") {
    return domain.websiteId;
  }
  throw new Error("Invalid Website Type!");
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { websiteDomain: string };
}) {
  var orgJsonRes = null;
  const websiteId = await getWebsiteId(
    decodeURIComponent(params.websiteDomain)
  );
  // console.log({ websiteId });
  const websiteJsonRes = await getWebsite(websiteId);
  var navMenuItems = await getNavMenuItems(websiteId, "en");
  if (websiteJsonRes && websiteJsonRes.orgId && websiteJsonRes.orgId !== "") {
    orgJsonRes = await getOrgById(websiteJsonRes.orgId);
  }
  const header: HeaderContent = {
    websiteLogoUrl: websiteJsonRes.logoUrl,
    tenantOrgNameAbbrTitle: `${orgJsonRes?.orgBasicInfo.name}${
      orgJsonRes?.orgBasicInfo.abbr && orgJsonRes?.orgBasicInfo.abbr !== ""
        ? ` (${orgJsonRes?.orgBasicInfo.abbr})`
        : ""
    }`,
    websiteLanguageCodes: websiteJsonRes.languageCodes,
    websiteNavigationMenu: {
      menuItems: navMenuItems,
      profileImageUrl: null,
    },
  };
  // TODO: change lang in html tag, get it from api res
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* <div className="flex justify-center items-center p-8">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div> */}
        {websiteJsonRes && navMenuItems ? <AppHeader data={header} /> : <></>}
        {/* <NavBar items={navMenuItems} /> */}
        {children}
        {orgJsonRes !== null ? <Footer params={orgJsonRes} /> : <></>}
      </body>
    </html>
  );
}
