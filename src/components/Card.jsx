import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
    >
      <div className="relative flex-shrink-0 w-60 h-72 rounded-[25px] text-white px-8 py-10 overflow-hidden backdrop:blur-xl bg-zinc-900">
        <FaFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="absolute footer bottom-0   w-full  left-0">
          <div className="flex items-center justify-between px-8 py-3  mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdCloseCircle />
              ) : (
                <FaDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
