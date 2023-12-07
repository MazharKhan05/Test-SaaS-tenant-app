type AppDomain = {
  domain: string;
  appId: string;
  orgId: string;
  status: string;
  geoSlug: string;
};

export type WebsiteDomainType = "TENANT" | "SREDIRECT" | "HREDIRECT";

type TenantWebsiteDomain = {
  domain: string;
  appId: string;
  orgId: string;
  websiteId: string;
  type: WebsiteDomainType & "TENANT";
};

type RedirectWebsiteDomain = {
  domain: string;
  appId: string;
  orgId: string;
  redirectLink: string;
  type: WebsiteDomainType & ("SREDIRECT" | "HREDIRECT");
};

export type WebsiteDomain = RedirectWebsiteDomain | TenantWebsiteDomain;
