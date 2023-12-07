import { getPage, getWebsite } from "@/lib/api/websiteManagementApi";
import ComponentRenderer from "@/components/ComponentRenderer";
import { Section } from "@/lib/types/websiteManagement/page";
import { Metadata } from "next";
import { getWebsiteId } from "@/lib/utils/websiteDomainUtility";
import { getOrgById } from "@/lib/api/orgManagement";

export const generateMetadata = async ({
  params,
}: {
  params: { websiteDomain: string };
}): Promise<Metadata> => {
  var orgJsonRes = null;
  const websiteId = await getWebsiteId(params.websiteDomain);
  const websiteJsonRes = await getWebsite(websiteId);
  if (websiteJsonRes && websiteJsonRes.orgId && websiteJsonRes.orgId !== "") {
    orgJsonRes = await getOrgById(websiteJsonRes.orgId);
  }
  const page = await getPage(websiteId, "en", "/");
  console.log(page, "page in metaData...");
  // console.log(website, "website in metaData...");

  return {
    title: `${page.content?.title}-${orgJsonRes?.orgBasicInfo.name}${
      orgJsonRes?.orgBasicInfo.abbr && orgJsonRes?.orgBasicInfo.abbr !== ""
        ? ` (${orgJsonRes?.orgBasicInfo.abbr})`
        : ""
    }`,
    description: "SaaS app by Wize Group.",
    icons: [
      {
        url: websiteJsonRes?.favIconUrl,
      },
    ],
  };
};

const Page = async ({ params }: { params: { websiteDomain: string } }) => {
  console.log("Home Page");

  const lang = "en";

  const domain = decodeURIComponent(params.websiteDomain);

  // const websiteId = "01HDS3Q6WYZZJ35CKCCDNWDCPM";
  const websiteId = await getWebsiteId(domain);
  const website = await getWebsite(websiteId);
  const page = await getPage(websiteId, lang, "/");

  // const sections = JSON.parse(homeDescription) as WebpageSection;
  return (
    <main className="p-3 py-0 lg:p-16 lg:py-0">
      <div className="p-12">
        <h1 className="m-auto text-3xl text-center">{page.content.title}</h1>
      </div>
      {page.content.sections.length > 0 &&
        page.content.sections.map((section: Section) => (
          <div key={section.id} id={section.id} className="px-5 md:px-10">
            {section.components.map((c) => (
              <ComponentRenderer
                key={c.data.id}
                component={c}
                tenantOrgId={website.orgId}
              />
            ))}
          </div>
        ))}
    </main>
  );
};

export default Page;
