"use client";
import { FiDownload } from "react-icons/fi";
import React, { useState } from "react";
import { FaFileLines } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import LogsBox from "../faculty/components/LogsBox";

const FileBox = ({ fileInfo, index }) => {
  const [menuState, setmenuState] = useState(false);
  const [logsBoxState, setlogsBoxState] = useState(false);
  const colors = [
    "teal-500/40",
    "pink-500/40",
    "orange-500/40",
    "blue-500/40",
    "purple-500/40",
    "yellow-500/40",
  ];

  function getColor(i) {
    return colors[i % colors.length];
  }

  function changeAccess() {
    const input = confirm(
      `Do you want to change the access of "${fileInfo.title}" to ${
        fileInfo.access == "public" ? "Hidden" : "Public"
      }?`
    );

    if (input) {
      console.log("Access change");
    } else {
      console.log("Access not changed");
    }
    setmenuState(!menuState);
  }

  function deleteFile() {
    const input = confirm(
      `Do you want to delete the file "${fileInfo.title}" ?`
    );

    if (input) {
      console.log("File deleted");
    } else {
      console.log("File not deleted");
    }
    setmenuState(!menuState);
  }

  return (
    <>
      <div
        className={`bg-${getColor(
          index
        )} rounded-2xl p-3 hover:shadow-lg transition-shadow duration-300 relative min-w-[300px] space-y-3`}
      >
        <div className="w-full flex justify-between items-center relative">
          <div className="bg-white p-3 rounded-full">
            <FaFileLines size={22} />
          </div>
          {!fileInfo.isAnnouncement && (
            <>
              <div
                onClick={() => setmenuState(!menuState)}
                className="p-2 rounded-full hover:bg-[var(--primary)] duration-150 text-[var(--pBlack)] cursor-pointer"
              >
                <HiDotsVertical size={20} />
              </div>

              <div
                className={`${
                  menuState ? "absolute" : "hidden"
                } bg-white rounded-lg shadow-md flex flex-col -right-5 top-12 overflow-hidden`}
              >
                {!fileInfo.isPrivateFile && (
                  <>
                    <span
                      className="text-base font-medium text-black text-center py-1 px-4 border-b border-b-gray-400 hover:bg-gray-100 cursor-pointer duration-150"
                      onClick={() => {
                        setmenuState(!menuState);
                        setlogsBoxState(!logsBoxState);
                      }}
                    >
                      Logs
                    </span>
                    <span
                      className="text-base font-medium text-black text-center py-1 px-4 border-b border-b-gray-400 hover:bg-gray-100 cursor-pointer duration-150"
                      onClick={changeAccess}
                    >
                      Change Access
                    </span>
                  </>
                )}

                <span
                  className="text-base font-medium text-red-600 text-center py-1 px-4 hover:bg-gray-100 cursor-pointer duration-150"
                  onClick={deleteFile}
                >
                  Delete
                </span>
              </div>
            </>
          )}
         
        </div>

        <h4 className="font-bold text-slate-800 mb-2 line-clamp-2 text-lg">
          {fileInfo.title}
        </h4>
        <p className="text-sm text-slate-700 mb-4">{fileInfo.date}</p>
        <div className="flex gap-2">
          <span
            key={index}
            className="bg-[var(--primary)] text-black rounded-full px-2 py-1 border border-slate-400 text-[14px]"
          >
            {fileInfo.tag}
          </span>
        </div>

        {fileInfo.downloadable ? (
          <button
            className={`mt-auto w-full bg-[var(--primary)] text-[var(--pBlack)] font-semibold py-2.5 rounded-lg transition-all shadow-md cursor-pointer hover:shadow-2xl transform hover:-translate-y-[2px] hover:scale-102 duration-200 flex items-center justify-center gap-2`}
          >
            <FiDownload size={16} />
            Download
          </button>
        ) : (
          <button
            className={`mt-auto w-full bg-[var(--primary)] text-[var(--pBlack)] font-semibold py-2.5 rounded-lg transition-all shadow-md cursor-pointer hover:shadow-2xl transform hover:-translate-y-[2px] hover:scale-102 duration-200 flex items-center justify-center gap-2`}
          >
            View
            <MdArrowOutward size={16} />
          </button>
        )}
      </div>
      {logsBoxState && (
        <LogsBox
          fileId={fileInfo.id}
          logsBoxVisibility={logsBoxState}
          setlogsBoxVisibility={setlogsBoxState}
        />
      )}
    </>
  );
};

export default FileBox;
