import React from "react";

export const MasjidVision = ({
  title,
  description,
  imageUrl,
}: {
  title: string | null;
  description: string;
  imageUrl: string | null;
}) => {
  console.log(description);
  return (
    <div className="min-w-md md:min-w-2xl flex-col justify-start items-center gap-[31px] flex mt-5">
      <div className=" text-center text-black font-['Crimson Text']">
        <h3 className="text-xl font-bold">Masjid Vision</h3>

        <span className="self-stretch text-xl">
          {description
            ? description
            : "At MasjidSaaS.com, we are dedicated to bridging the gap between masjids and their communities. Learn about our mission, values, and commitment to providing cutting-edge solutions for masjids worldwide."}
        </span>
      </div>
    </div>
  );
};
