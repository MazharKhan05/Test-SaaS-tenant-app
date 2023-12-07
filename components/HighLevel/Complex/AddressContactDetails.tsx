import { AddressContactDetailsContent } from "@/lib/types/Component/HighLevel/Complex";
import React from "react";

export const AddressContactDetails = ({
  params,
}: {
  params: AddressContactDetailsContent;
}) => {
  return (
    <div className="widget-area" role="complementary">
      <div className=" text-sm lg:text-md">
        <div>
          {params.addressDetails.street ? params.addressDetails.street : ""}
          <br />
          {params.addressDetails.city ? (
            <span>{params.addressDetails.city}</span>
          ) : (
            ""
          )}
          ,
          {params.addressDetails.state ? (
            <span>{params.addressDetails.state}</span>
          ) : (
            ""
          )}{" "}
          {params.addressDetails.zip ? (
            <span>{params.addressDetails.zip}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          {params.contactDetails.phone ? (
            <>
              <span> Phone:</span>
              <strong>
                {" "}
                <a
                  href={`tel: +${params.contactDetails.phone}`}
                  title="call us"
                >
                  {params.contactDetails.phone}
                </a>
              </strong>
            </>
          ) : (
            <></>
          )}
          <br />
          {params.contactDetails.email ? (
            <>
              <span> Email Us:</span>
              <strong>
                {" "}
                <a
                  href={`mailto:${params.contactDetails.email}`}
                  title="email us"
                >
                  {params.contactDetails.email}
                </a>
              </strong>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
