import { useState } from "react";
import Logo from "../../../assets/images/logo.png";

import { AiOutlineBars } from "react-icons/ai";

import { Link } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import MemberRoutes from "./MemberRoutes";
import AdminRoutes from "./AdminRoutes";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const [role, isPending] = useRole();

  //   For guest/host menu item toggle button

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link
              to="/"
              className="w-full hidden md:flex px-4 py-1 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto"
            >
              <img className="h-10 w-10" src={Logo} alt="" />
              <h1 className="bg-gradient-to-r from-blue-600 via-green-500 text-xl font-bold to-indigo-400 inline-block text-transparent bg-clip-text">
                Diamond House
              </h1>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}

            <nav>
              {role?.role === "user" && <UserRoutes />}
              {role?.role === "member" && <MemberRoutes />}
              {role?.role === "admin" && <AdminRoutes />}

              {/* Menu Items */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
