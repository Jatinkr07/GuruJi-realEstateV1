/* eslint-disable no-irregular-whitespace */
import { Link, useNavigate } from "react-router-dom";
import { fetchTypes } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const navigate = useNavigate();

  const {
    data: types,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["types"],
    queryFn: fetchTypes,
  });

  const handleTypeSelect = (typeName) => {
    navigate(`/explore/projects?type=${encodeURIComponent(typeName)}`);
  };

  return (
    <footer className="text-gray-600 bg-gray-100 lg:py-4">
      <div className="container px-4 py-8 mx-auto max-w-7xl lg:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo-05.png"
              alt="Company Logo"
              width={120}
              height={40}
            />
            <p className="mt-4 text-sm text-center md:text-left">
              Your trusted partner in creating beautiful and functional spaces.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aboutus"
                  className="transition-colors hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="transition-colors hover:text-gray-900"
                >
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Projects</h3>

            {isLoading && <p className="text-sm text-gray-400">Loading...</p>}
            {isError && <p className="text-sm text-red-500">Failed to load</p>}

            <ul className="space-y-2">
              {Array.isArray(types) && types.length > 0
                ? types.map((type) => (
                    <li key={type._id}>
                      <button
                        onClick={() => handleTypeSelect(type.name)}
                        className="w-full px-2 py-1 text-sm text-left text-black "
                      >
                        {type.name}
                      </button>
                    </li>
                  ))
                : !isLoading && (
                    <li className="text-sm text-gray-400">
                      No project types found.
                    </li>
                  )}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>Avenue 64, BPTP Park -81, Sector-81, Greater Faridabad</li>
              <li>Phone: +91 9540274407</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container flex flex-col items-center justify-end px-4 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} GuruJi Homes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
