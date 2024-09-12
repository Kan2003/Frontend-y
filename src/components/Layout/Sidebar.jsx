import React from "react";
import Navlink from "./Navlink";
const Sidebar = () => {
  return (
    <div className="w-[280px] bg-[#000000] border-r-[1px] border-r-white text-white h-screen fixed flex flex-col justify-between py-[80px]  px-2 ">
      <nav className="flex flex-col justify-between py-4">
        <div className="flex flex-col gap-3">
          
          <Navlink title="Home" img="/src/assets/home-line.png" />
          <Navlink title="Liked Video" img="/src/assets/like.png" />
          <Navlink title="History" img="/src/assets/Icon.svg" />
          <Navlink title="My content" img="/src/assets/content.png" />
          <Navlink title="collection" img="/src/assets/collect.png" />
          <Navlink title="subscribers" img="/src/assets/subscribe.png" />
        </div>
      </nav>
      <div className="flex flex-col gap-3">
        <Navlink title="support" img="/src/assets/support.png" />
        <Navlink title="setting" img="/src/assets/setting.png" />
        </div>
    </div>
  );
};

export default Sidebar;
