import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "./";
import { navLinks } from "../utils/routes";
import { logo, menu, search, thirdweb } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  //!dummy data
  const address = "0xabc";

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px] hover:bg-[#26262e] transition">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text=[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer hover:bg-[#62e8a8] transition">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType={"button"}
          title={address ? "Create a campaign" : "Connect"}
          styles={
            address
              ? "bg-[#1dc071] hover:bg-[#4acd8d] transition"
              : "bg-[#8c6dfd] hover:bg-[#4acd8d] transition"
          }
          handleClick={() => {
            if (address) navigate("create-campaign");
            else "connect()";
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer hover:bg-[#59595a] transition">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer hover:bg-[#59595a] transition">
          <img
            src={thirdweb}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] shadow-secondary py-4 transition-all duration-700 rounded-md p-2 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          }`}
        >
          <ul className="mb-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 rounded-sm ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt="link-name"
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  } `}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[$1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
            <CustomButton
              btnType={"button"}
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else "connect()";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
