"use client";
import React, { useEffect, useState } from "react";
import { filesData, logs } from "../../utils/data";

const LogsBox = ({ fileId, setlogsBoxVisibility, logsBoxVisibility }) => {
  const filteredlogs = logs.filter((item) => {
    return item.fileId == fileId;
  });

  return (
    <div
      className={`${
        logsBoxVisibility ? "fixed" : "hidden"
      } bg-gray-500/50 backdrop-blur-xs w-full h-full top-0 left-0 flex items-center justify-end p-5 z-[100]`}
      onClick={() => setlogsBoxVisibility(false)}
    >
      <div className="w-[400px] h-full bg-[var(--primary)] rounded-2xl shadow-lg slide-in-right p-3 flex flex-col">
        <b className="text-2xl text-[var(--pBlack)]">LOGS</b>
        <ul className="mt-4 flex flex-col gap-1 list-disc pl-4">
          {filteredlogs[0].logs.map((log) => (
            <li className="text-base text-gray-700">{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogsBox;
