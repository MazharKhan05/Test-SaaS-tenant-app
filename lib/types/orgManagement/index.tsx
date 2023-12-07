export type Org = {
  id: string;
  orgBasicInfo: BasicInfo;
  openTimings: OpenTimings;
  categoryId: string;
  subcategoryId: string | null;
  createdBy: string | null;
  logoUrl: string | null;
  originalWebAddress: string | null;
  primaryTenantFQDN: string | null;
  ownDomainFQDN: string | null;
  contactInfo: ContactInfo;
  socialMediaInfo: SocialMediaInfo;
};

export type BasicInfo = {
  name: string;
  abbr: string;
  description: string | null;
};

export type OpenTimings = {
  from: string;
  to: string;
};

export type ContactInfo = {
  email: string | null;
  phone: string | null;
  address: {
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    country: string | null;
  };
};

export type SocialMediaInfo = {
  googlePlaceUrl: string | null;
  googlePlusUrl: string | null;
  facebookUrl: string | null;
  twitterUrl: string | null;
  instagramUrl: string | null;
  youTubeUrl: string | null;
};
