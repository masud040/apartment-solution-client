import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import placeholder from "../../assets/images/placeholder.jpg";
import useAuth from "../../hooks/useAuth";
const MenuDropdown = () => {
  const { user, logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    await logOut();
    toast.success("Logged out");
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden gap-8 text-lg font-bold md:flex">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-rose-400" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-rose-400" : ""
            }
          >
            Apartment
          </NavLink>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu className="md:hidden" />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user ? user.photoURL : placeholder}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-b-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-[48px] text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block px-4 py-3 font-semibold transition md:hidden hover:bg-neutral-100"
            >
              Home
            </Link>
            {user ? (
              <>
                <p className="px-4 py-2 font-semibold transition hover:bg-neutral-100">
                  {user.displayName}
                </p>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 font-semibold transition hover:bg-neutral-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 font-semibold transition hover:bg-neutral-100 text-start"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
