"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import FileBox from "../../utils/FileBox";
import { classes, filesData } from "../../utils/data";

const page = () => {
  const [activeTab, setActiveTab] = useState("public");
  const path = usePathname();

  const currentClassFiles = filesData.filter((item) => {
    // console.log(`/${item.classId}`);
    // console.log(path);
    return `/faculty/${item.classId}` === path;
  });

  const publicFiles = currentClassFiles[0].files.filter((item) => {
    return item.access == "public"
  })

  const hiddenFiles = currentClassFiles[0].files.filter((item) => {
    return item.access == "hidden"
  })

  console.log(currentClassFiles);
  

  const currentClassInfo = classes.filter((item) => {
    // console.log(`/${item.classId}`);
    // console.log(path);
    return `/faculty/${item.classId}` === path;
  });



  return (
    <div className="min-h-screen px-5 py-4 flex flex-col w-full items-start space-y-2">
      <div className="w-full bg-white rounded-3xl p-8 shadow-md">
        {/* Top Row - 5 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Program Card */}
          <div className="bg-purple-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Program
            </p>
            <p className="text-gray-900 text-lg font-bold">
              {currentClassInfo[0].course}
            </p>
          </div>

          {/* Section Card */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Section
            </p>
            <p className="text-gray-900 text-lg font-bold">
              {currentClassInfo[0].section}
            </p>
          </div>

          {/* Semester Card */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Semester
            </p>
            <p className="text-gray-900 text-lg font-bold">
              {currentClassInfo[0].semester}
            </p>
          </div>

          {/* Batch Card */}
          <div className="bg-green-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Batch
            </p>
            <p className="text-gray-900 text-lg font-bold">2025-29</p>
          </div>

          {/* Coordinator Card */}
          <div className="bg-orange-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Coordinator
            </p>
            <p className="text-blue-600 text-lg font-bold">
              XYZ
            </p>
          </div>
        </div>

        {/* Bottom Row - Coordinator Email + Upload Button */}
        <div className="border-t pt-6 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Coordinator Email
            </p>
            <p className="text-blue-600 text-lg font-semibold">
              xyz@iilm.edu
            </p>
          </div>

          {/* Upload Button */}
          <button className="w-fit px-5 cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            <FiUpload size={20} />
            Upload File
          </button>
        </div>
      </div>

      <div className="my-8 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            className={`w-1.5 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full`}
          ></div>
          Files uploaded for this class
        </h3>

        <div className="flex w-full items-center gap-6 border-b border-slate-200 mb-6">
          {["public", "hidden"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold transition relative cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              {tab === "public"
                ? "Public Files"
                : "Hidden Files"}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {activeTab === "public" && publicFiles.map((file, index) => (
            <FileBox fileInfo={file} index={index} key={file.id} />
          ))}
          {activeTab === "hidden" && hiddenFiles.map((file, index) => (
            <FileBox fileInfo={file} index={index} key={file.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
