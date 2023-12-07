import Image from "next/image";
import Dropdown from "@/components/Core/Dropdown";
import { HeaderContent } from "@/lib/types/Component/HighLevel/Complex";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const AppHeader = ({ data }: { data: HeaderContent }) => {
  return (
    <div className="w-screen flex flex-col items-end">
      <div className="w-full flex justify-between items-center py-3 px-6">
        <div className="w-4/5 flex items-center space-x-3">
          <Link href="/">
            <Image
              src={data.websiteLogoUrl}
              width={`100`}
              height={`70`}
              alt="logo"
            />
          </Link>
          <h2 className="text-md lg:text-lg font-semibold">
            {" "}
            {data.tenantOrgNameAbbrTitle}
          </h2>
        </div>
        <div className="flex justify-end w-1/5">
          <Dropdown data={data.websiteLanguageCodes} />
        </div>
      </div>
      <div className="w-full flex items-center">
        <NavBar items={data.websiteNavigationMenu.menuItems} />
      </div>
    </div>
  );
};
