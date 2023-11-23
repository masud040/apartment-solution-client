import { Link } from "react-router-dom";

import MenuDropdown from "./MenuDropdown";
import Container from "../../components/Container/Container";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white bg-opacity-60 z-10 shadow-sm">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-2">
              <img className="w-20 h-14" src={logo} alt="" />
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 via-green-500 text-2xl font-bold to-indigo-400 inline-block text-transparent bg-clip-text"
              >
                Real Estate
              </Link>
            </div>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
