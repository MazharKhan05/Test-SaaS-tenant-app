// TODO: Implement this comp in backend
function Dropdown({ data }: { data: Array<string> }) {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 font-light md:font-medium rounded-lg text-sm px-1.5 py-1 md:px-3 md:py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Language{" "}
        <svg
          className="w-2 h-2 ml-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700"
      >
        <ul
          className="text-md text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {data &&
            data.map((langCode, i) => (
              <li key={i} className="px-2 py-1">
                <a
                  href="#"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {langCode}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
