"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const [menuActive, setmenuActive] = useState(true);

  const classes = [
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 1,
      id: "BTECH-CSE-A-SEM1",
      text: "BTech CSE - Section A - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "B",
      semester: 1,
      id: "BTECH-CSE-B-SEM1",
      text: "BTech CSE - Section B - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "C",
      semester: 1,
      id: "BTECH-CSE-C-SEM1",
      text: "BTech CSE - Section C - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 3,
      id: "BTECH-CSE-A-SEM3",
      text: "BTech CSE - Section A - Sem 3",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 5,
      id: "BTECH-CSE-A-SEM5",
      text: "BTech CSE - Section A - Sem 5",
    },
  ];

  const colors = [
    "bg-teal-500/40",
    "bg-pink-500/40",
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-purple-500/40",
    "bg-yellow-500/40",
  ];
  function getRandomElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <aside
      className={`${
        menuActive ? "w-[350px]" : "w-fit"
      } transition-[width] duration-200 ease-in-out  h-screen p-3`}
    >
      <div className="w-full bg-[var(--darkShade)] h-full rounded-2xl flex flex-col shadow transition-all duration-200 ease-in-out">
        {/* Logo */}
        <div
          className={`p-3 flex ${
            menuActive ? "justify-between" : "justify-center"
          } items-center`}
        >
          <img
            src="/iilm-logo.webp"
            alt="University Logo"
            className={`${
              menuActive ? "block" : "hidden"
            } w-36 h-auto object-contain rounded-xl`}
          />
          <div
            className="p-3 bg-[var(--primary)] text-[var(--pBlack)] rounded-full cursor-pointer hover:bg-[var(--pBlack)] hover:text-[var(--primary)] duration-150"
            onClick={() => setmenuActive(!menuActive)}
          >
            <TbMenu2 size={24} />
          </div>
        </div>

        {/* Upload Button */}
        <div className="p-4">
          <Link
            href={"/upload-file"}
            className="w-full cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FiUpload size={18} />
            {menuActive ? "Upload File" : ""}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-2 flex flex-col">
            <Link
              href={"/"}
              onClick={() => handlePageTransition("announcements")}
              className={`sidebar-btn flex gap-1 items-center ${
                pathname === "/" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full">
                <HiOutlineSpeakerphone size={24} />
              </div>
              {menuActive ? "Announcements" : ""}
            </Link>

            <Link
              href={"/"}
              onClick={() => handlePageTransition("private")}
              className="sidebar-btn flex gap-2 items-center"
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full">
                <IoFileTrayFullOutline size={24} />
              </div>
              {menuActive ? "Private Files" : ""}
            </Link>
          </div>

          {/* Classes */}

          <div className={`mt-6 ${menuActive ? "block" : "hidden"}`}>
            <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
              <PiStudentBold />
              Your Classes
            </h3>

            <div className="classCon space-y-1.5 flex flex-col max-h-[280px] overflow-y-scroll">
              {classes.map((classItem) => (
                <Link
                  href={`/${classItem.id}`}
                  key={classItem.id}
                  onClick={() => handlePageTransition("class", classItem.id)}
                  className={`class-btn text-sm ${
                    pathname === `/${classItem.id}` ? "class-active" : ""
                  }`}
                >
                  {classItem.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="place-self-end w-full my-3">
          <Link
            href={"/"}
            className={`${
              menuActive ? "w-[92%]" : "w-fit aspect-square"
            } flex items-center h-fit rounded-full ${getRandomElement(colors)} text-[var(--primary)] mx-auto justify-start py-3 px-4  hover:scale-[1.03] duration-150 ease-in-out flex items-center font-medium gap-2`}
          >
            <FaUser size={20} />
            {menuActive ? "Account" : ""}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
