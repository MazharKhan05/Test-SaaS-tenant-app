import { HeaderData } from "../../websiteManagement/page/components/core/data";

type HeaderContent = {
    websiteLogoUrl: string,
    tenantOrgNameAbbrTitle: string,
    websiteLanguageCodes: Array<string>;
    websiteNavigationMenu: NavigationMenu;
}

type NavigationMenu ={
    menuItems: NavigationMenuItem[],
    profileImageUrl: string | null
}

type NavigationMenuItem = {
    id: string;
    websiteId: string;
    route: string;
    parentId: string | null;
    order: number;
    content: {
        name: string;
    };
};

type HiddenLabelDescriptionListContent = {
    title: string,
    descriptionListMember: Array<descriptionListMemberContent>
}

type descriptionListMemberContent = {
    imageUrl: string,
    text: string
}

type SocialMediaLinksContent = {
    facebookProfileLink: string | null,
    appleProfileLink: string | null,
    twitterProfileLink: string | null,
    linkedInProfileLink: string | null,
    instagramProfileLink: string | null,
};

type AddressContactDetailsContent = {
    addressDetails: AddressDetailsContent,
    contactDetails: ContactDetailsContent
};

type AddressDetailsContent = {
    street: string | null,
    city: string | null,
    state: string | null,
    zip: number | null,
    country: string | null
}

type ContactDetailsContent = {
    phone: string | null,
    email: string | null,
}

// type ContentCardData = {
//     header: Header
// }

export type { SocialMediaLinksContent,
    AddressContactDetailsContent,
    HiddenLabelDescriptionListContent,
    NavigationMenu,
    NavigationMenuItem,
    HeaderContent
};
