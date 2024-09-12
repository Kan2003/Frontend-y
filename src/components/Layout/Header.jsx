import React, { useContext } from "react";
import { SearchContext } from "./Layout";

const Header = () => {
  const {searchTerm, setSearchTerm } = useContext(SearchContext)
  return (
    <header className="bg-[#000000] border-b-[1px] border-b-white text-white h-[72px] w-full z-10 flex items-center px-5 justify-between">
      <div className="w-[63px] h-[63px] cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/Logo.png"
          alt=""
        />
      </div>
      <div>
        <input
          className="bg-[#000000] pt-[10px] outline-none pb-[10px] pl-[14px] pr-[14px] border-[#D0D5DD] border-[1px] w-[400px] "
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center ">
        <button className="w-[83px] h-[44px] rounded-[8px]">Log In</button>
        <button className="w-[83px] h-[44px] rounded-[8px] bg-[#AE7AFF] text-[#000000]">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
