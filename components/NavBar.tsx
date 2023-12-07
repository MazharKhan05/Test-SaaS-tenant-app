"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenuItem } from "@/lib/types/websiteManagement/navigationMenuItem";
import { useEffect, useState } from "react";
import { Collapse } from "flowbite";

type MultipleMenu = {
  single: false;
  submenus: Menu;
};

type SingleMenu = {
  single: true;
};

type Menu = (SingleMenu | MultipleMenu) & {
  menuName: string;
  redirectTo: string;
};

const NavBar = ({ items }: { items: NavigationMenuItem[] }) => {
  const pathName = usePathname();
  const [collapseActionObj, setCollapseActionObj] = useState<Collapse>();
  const [navMenuExpanded, setNavMenuExpanded] = useState({
    triggerEl: "",
    targetEl: "",
    isExpanded: false,
  });
  const [isNavMenuExpanded, setIsNavMenuExpanded] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { homePageSectionData } = useContext(subdomainPageDataContext);

  useEffect(() => {
    const targetEl = document.getElementById("collapseNavTargetEl");

    const triggerEl = document.getElementById("collapseNavTriggerEl");

    setCollapseActionObj(new Collapse(targetEl, triggerEl));
  }, []);

  const handleNavActionTrigger = () => {
    if (collapseActionObj && isNavExpanded) {
      collapseActionObj.collapse();
    } else if (collapseActionObj && !isNavExpanded) {
      collapseActionObj.expand();
    }
    setIsNavExpanded(!isNavExpanded);
    console.log(collapseActionObj && collapseActionObj._visible);
  };
  console.log(collapseActionObj && collapseActionObj._visible);

  return (
    <nav className="w-full flex flex-wrap items-center justify-between mx-auto p-6 shadow">
      <div className="inline-flex items-center space-x-2 md:hidden">
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
          id="collapseNavTriggerEl"
          onClick={() => handleNavActionTrigger()}
        >
          {/* <span className="sr-only">Open main menu</span> */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <span className="text-sm">Menu</span>
      </div>
      <div
        className="w-full md:flex items-center justify-between hidden"
        id="collapseNavTargetEl"
      >
        <ul className="md:flex flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          {items.length > 0 &&
            items.map((m) => (
              <li key={m.id} className="flex flex-col items-center">
                <div>
                  <Link
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    href={m.route}
                  >
                    {m.content.name}
                  </Link>
                </div>
                {m.route == pathName && (
                  <div className="h-0.5 w-1/2 bg-black"></div>
                )}
              </li>
            ))}
        </ul>
        {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <button className="bg-custom-green text-white font-semibold px-3 py-2 rounded">
              Log in
            </button>
          </li>
          <li>
            <button className="md:flex hidden text-white font-semibold">
              <Image
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                width={40}
                height={40}
                src={navMenu.profileImageUrl}
                alt=""
              />
            </button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default NavBar;
