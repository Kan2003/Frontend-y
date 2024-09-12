import React from "react";
import { Link } from "react-router-dom";
const Navlink = ({title , img}) => {
  return (
    <Link
      to="/"
      className=" py-2 px-4 border-[1px] border-white rounded flex items-center gap-2"
    >
      <div className="w-[24px] h-[24px]">
        <img src={img} alt="" />
      </div>
      {title}
    </Link>
  );
};

export default Navlink;
