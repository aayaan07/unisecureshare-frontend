"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { classes } from "../../utils/data";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

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
      className={`w-[350px] transition-[width] duration-200 ease-in-out  h-screen p-3`}
    >
      <div className="w-full bg-[var(--darkShade)] h-full rounded-2xl flex flex-col shadow transition-all duration-200 ease-in-out">
        {/* Logo */}
        <div className={`p-3 flex justify-between items-center`}>
          <img
            src="/iilm-logo.webp"
            alt="University Logo"
            className={`block w-36 h-auto object-contain rounded-xl`}
          />
        </div>

        {/* Upload Button */}
        <div className="p-4">
          <Link
            href={"/faculty/upload-file"}
            className="w-full cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FiUpload size={18} />
            Upload File
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-2 flex flex-col">
            <Link
              href={"/faculty"}
              onClick={() => handlePageTransition("announcements")}
              className={`sidebar-btn flex gap-1 items-center ${
                pathname === "/faculty" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full">
                <HiOutlineSpeakerphone size={24} />
              </div>
              Announcements
            </Link>

            <Link
              href={"/faculty/private-files"}
              onClick={() => handlePageTransition("private")}
              className={`sidebar-btn flex gap-1 items-center ${
                pathname === "/faculty/private-files" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full">
                <IoFileTrayFullOutline size={24} />
              </div>
              Private Files
            </Link>
          </div>

          {/* Classes */}

          <div className={`mt-6 block`}>
            <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
              <PiStudentBold />
              Your Classes
            </h3>

            <div className="classCon space-y-1.5 flex flex-col max-h-[280px] overflow-y-scroll">
              {classes.map((classItem) => (
                <Link
                  href={`/faculty/${classItem.classId}`}
                  key={classItem.classId}
                  onClick={() => handlePageTransition("class", classItem.id)}
                  className={`class-btn text-sm ${
                    pathname === `/faculty/${classItem.classId}` ? "class-active" : ""
                  }`}
                >
                  {classItem.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Account Button  */}
        <div className="place-self-end w-full my-3">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            ref={profileMenuRef}
            className={`w-[92%] flex items-center h-fit rounded-full ${getRandomElement(
              colors
            )} text-[var(--primary)] mx-auto justify-start py-3 px-4 hover:scale-[1.03] duration-150 ease-in-out font-medium gap-2 relative cursor-pointer`}
          >
            <FaUser size={20} />
            Account
            {profileMenuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 font-medium transition flex items-center gap-2 cursor-pointer">
                  <CiSettings size={18} />
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium transition border-t border-gray-200 flex items-center gap-2 cursor-pointer">
                  <MdLogout size={18} />
                  Logout
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
