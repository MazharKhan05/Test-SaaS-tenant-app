import React from "react";
import { SocialMediaLinks } from "./SocialMediaLinks";
import Image from "next/image";
import { Org } from "@/lib/types/orgManagement";
import Link from "next/link";
import { AddressContactDetails } from "./AddressContactDetails";
import { AddressContactDetailsContent } from "@/lib/types/Component/HighLevel/Complex";

export const Footer = ({ params }: { params: Org }) => {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  const addressContactDetails: AddressContactDetailsContent = {
    addressDetails: {
      street: params.contactInfo.address.street,
      city: params.contactInfo.address.city,
      state: params.contactInfo.address.state,
      zip: parseInt(
        params.contactInfo.address.zip ? params.contactInfo.address.zip : ""
      ),
      country: params.contactInfo.address.country,
    },
    contactDetails: {
      phone: params.contactInfo.phone,
      email: params.contactInfo.email,
    },
  };
  return (
    <div className="flex flex-col min-w-md md:min-w-2xl mx-auto p-6 pb-0 shadow-inner">
      <div className="w-full flex flex-row items-center">
        <div className="w-1/2 flex flex-col justify-between space-y-4">
          <Link href="/">
            <Image
              width={`100`}
              height={`70`}
              src={
                params.logoUrl && params.logoUrl !== ""
                  ? params.logoUrl
                  : "https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/common/SaaSLogo.jpg"
              }
              alt="logo"
            />
          </Link>
          <div className="flex flex-row items-center space-x-2 text-sm lg:space-x-5 md:text-md text-black font-light font-['Crimson Text']">
            <a href="/privacy-policy">
              <span>Privacy Policy</span>
            </a>
            <a href="/terms-of-service">
              <span>Terms of Service</span>
            </a>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-end space-y-6">
          <div className="flex flex-col space-y-4">
            <SocialMediaLinks params={params.socialMediaInfo} />

            <AddressContactDetails params={addressContactDetails} />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <span className=" text-black text-opacity-30 text-[13px] font-semibold font-['Playfair Display']">
          Copyright © {currentYear} MasjidSaaS.com. All rights reserved.
        </span>
      </div>
    </div>
  );
};
