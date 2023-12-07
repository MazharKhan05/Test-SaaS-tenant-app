import { WebsiteDomain } from "../types/domainManagement";

const getWebsiteDomain = async (websiteDomain: string) => {
  console.log(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/dm/website-domains/${websiteDomain}`, "websitedomain for fetch")
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/dm/website-domains/${websiteDomain}`
  );
  if (res.ok) {
    const json = (await res.json()) as WebsiteDomain;
    // console.log(json, "webDomain jsonRes...")
    return json;
  }
  const errMessage = await res.text();
  throw new Error(errMessage);

  // const json = `{"domain":"${websiteDomain}", "appId": "00000000000000000000000000", "orgId": "00000000000000000000000000", "websiteId": "01HDS3Q6WYZZJ35CKCCDNWDCPM", "type": "TENANT"}`;
  // const res = JSON.parse(json) as WebsiteDomain;
  // return res;
};

export { getWebsiteDomain };



// friscomasjidhr.org hardredirect, -> friscomasjid.org(softredirect) 

// frisco.masjid.org -> frisco-tx.masjid.org(tenant-domain) 

// friscomasjid.org softredirect, -> frisco-tx.masjid.org(tenant-domain) 


// for a given page get tenant-domain 
// tenant domain-algo
// keep digging domains until you find the tenant doamin and return that domain(read only func)












// friscomasjidhr.org hardredirect, -> frisco-tx.masjid.org(tenant-domain) 
                       // or
