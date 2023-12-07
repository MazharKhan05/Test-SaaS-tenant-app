import { getPage, getWebsite } from "@/lib/api/websiteManagementApi";
import ComponentRenderer from "@/components/ComponentRenderer";
import { Metadata } from "next";
import { getWebsiteId } from "@/lib/utils/websiteDomainUtility";
import { getOrgById } from "@/lib/api/orgManagement";

export const generateMetadata = async ({
  params,
}: {
  params: { websiteDomain: string; slug: string[] };
}): Promise<Metadata> => {
  var orgJsonRes = null;
  const websiteId = await getWebsiteId(params.websiteDomain);
  const websiteJsonRes = await getWebsite(websiteId);
  if (websiteJsonRes && websiteJsonRes.orgId && websiteJsonRes.orgId !== "") {
    orgJsonRes = await getOrgById(websiteJsonRes.orgId);
  }
  const page = await getPage(websiteId, "en", `/${params.slug.join("/")}`);

  return {
    title: `${page.content?.title}-${orgJsonRes?.orgBasicInfo.name}${
      orgJsonRes?.orgBasicInfo.abbr && orgJsonRes?.orgBasicInfo.abbr !== ""
        ? `-${orgJsonRes?.orgBasicInfo.abbr}`
        : ""
    }`,
    description: "SaaS app by Wize Group.",
    icons: [
      {
        url: websiteJsonRes.favIconUrl,
      },
    ],
  };
};

const Page = async ({
  params,
}: {
  params: { websiteDomain: string; slug: string[] };
}) => {
  const lang = "en";
  const domain = decodeURIComponent(params.websiteDomain);
  console.log(params, "domain in slug page...");
  const websiteId = await getWebsiteId(domain);
  // const websiteId = "01HDS3Q6WYZZJ35CKCCDNWDCPM";

  console.log(`/${params.slug.join("/")}`);

  const page = await getPage(websiteId, lang, `/${params.slug.join("/")}`);
  // console.log(page, "page content...");

  return (
    <main className="p-3">
      <div className="p-12">
        <h1 className="m-auto text-3xl text-center">{page.content.title}</h1>
      </div>
      {page.content.sections.map((section) => (
        <div key={section.id} id={section.id} className="p-10">
          {section.components.map((c) => (
            <ComponentRenderer key={c.data.id} component={c} />
          ))}
        </div>
      ))}
    </main>
  );
};

export default Page;
