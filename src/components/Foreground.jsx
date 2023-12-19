import React, { useRef, useState } from "react";
import Card from "./Card";
const Foreground = () => {

    const ref= useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: true,tagTitle: "Download Now",tagColor: "blue" },
    },
    {
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        filesize: "0.4mb",
        close: true,
        tag: { isOpen: true,tagTitle: "Download Now",tagColor: "green" },
      },
      {
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        filesize: "0.4mb",
        close: false,
        tag: { isOpen: true,tagTitle: "Upload",tagColor: "green" },
      },
  ];

  return (
    <div>
      <div ref={ref} className="fixed flex p-5 flex-wrap gap-10 z-[3] top-0 left-0 w-full h-full ">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
    </div>
  );
};

export default Foreground;
