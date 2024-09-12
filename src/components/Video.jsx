import React from "react";

const Video = ({thumbnail , avatar , title , views , videoFile , username}) => {
  return (
    <div className="w-[270px] h-[250px] bg-zinc-700 flex flex-col cursor-pointer">
      <div className="w-full h-[134px] overflow-hidden flex justify-center items-center bg-black">
        <img src={thumbnail} className="w-full h-full object-cover object-center" alt="" />
      </div>
      <div className="content flex flex-col">
          <div className="flex px-2 py-2 gap-2 items-center">
              <img
                src={avatar}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white"
              />
            <p className="text-lg text-white leading-5">
              {title}
            </p>
          </div>
          <div className="flex flex-wrap pl-[55px] gap-1 text-sm">
            <p className="views">{views} views |</p>
            <p className="time">18 hours ago |</p>
            <p className="owner">{username}</p>
          </div>
      </div>
    </div>
  );
};

export default Video;
