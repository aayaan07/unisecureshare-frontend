"use client";
import { useState } from "react";
import FileBox from "../../utils/FileBox";
import { privateFiles } from "../../utils/data";

const PrivateFilesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  

  return (
    <div className="min-h-screen px-5 py-4 flex flex-col w-full items-start">
       <div className="w-fit flex flex-col gap-5">
        <b className="Averia text-[var(--pBlack)] font-normal text-7xl">
          Encrypted <br />
          Private Storage
        </b>
      </div>

      <div className="w-full my-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            className={`w-1.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full`}
          ></div>
          Files
        </h3>

        {/* <div className="flex w-full items-center gap-6 border-b border-slate-200 mb-6">
          {["all", "hfileIdden", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold transition relative cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              {tab === "all"
                ? "All Files"
                : tab === "hfileIdden"
                ? "HfileIdden Files"
                : "Archived Files"}
            </button>
          ))}
        </div> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {privateFiles.length > 0 ? (
            privateFiles.map((file, index) => (
              <FileBox fileInfo={file} index={index} key={file.fileId} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No private files yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateFilesPage;