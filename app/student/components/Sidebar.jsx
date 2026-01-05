"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUpload, FiDownload } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FaUser, FaStar } from "react-icons/fa";
import { MdLogout, MdAssignment } from "react-icons/md";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuActive, setmenuActive] = useState(true);
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
    if (arr.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    setProfileMenuOpen(false);
    // Add your logout logic here
  };

  const handleSettings = () => {
    console.log("Settings clicked");
    setProfileMenuOpen(false);
    // Add your settings logic here
  };

  return (
    <aside
      // onMouseEnter={() => setmenuActive(true)}
      // onMouseLeave={() => setmenuActive(false)}
      className={`${
        menuActive ? "w-[350px]" : "w-[110px]"
      } transition-all duration-300 ease-in-out h-screen p-3`}
    >
      <div className="w-full bg-[var(--darkShade)] h-full rounded-2xl flex flex-col shadow transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div
          className={`p-3 flex ${
            menuActive ? "justify-between" : "justify-center"
          } items-center`}
        >
          <img
            src="/iilm-logo.webp"
            alt="University Logo"
            className={`${menuActive ? "block" : "hidden"} w-36 h-auto object-contain rounded-xl`}
          />
          <div
            className="p-3 bg-[var(--primary)] text-[var(--pBlack)] rounded-full cursor-pointer hover:bg-[var(--pBlack)] hover:text-[var(--primary)] duration-150 flex items-center justify-center"
            onClick={() => setmenuActive(!menuActive)}
          >
            <TbMenu2 size={24} />
          </div>
        </div>

        {/* Calender */}
        <div className="p-4">
          <Link
            href={"/student/calender"}
            className="w-full cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <CiCalendar size={18} />
            {menuActive ? "Calender" : ""}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-2 flex flex-col">

            {/* Announcements */}
            <Link
              href={"/student"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/student" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <HiOutlineSpeakerphone size={24} />
              </div>
              {menuActive ? (
                <span className="flex items-center gap-2">
                  Announcements
                </span>
              ) : (
                ""
              )}
            </Link>

            {/* My Courses */}
            <Link
              href={"/student/courses"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/student/courses" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <PiStudentBold size={24} />
              </div>
              {menuActive ? (
                <span className="flex items-center gap-2">
                  My Courses
                </span>
              ) : (
                ""
              )}
            </Link>

            {/* Assignments */}
            <Link
              href={"/student/assignments"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/student/assignments" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <MdAssignment size={24} />
              </div>
              {menuActive ? (
                <span className="flex items-center gap-2">
                  Assignments
                </span>
              ) : (
                ""
              )}
            </Link>

            {/* My Progress */}
            <Link
              href={"/student/progress"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/student/progress" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <IoStatsChart size={24} />
              </div>
              {menuActive ? (
                <span className="flex items-center gap-2">
                  My Progress
                </span>
              ) : (
                ""
              )}
            </Link>

            {/* Bookmarks / Saved Files */}
            {/* <Link
              href={"/student/bookmarks"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/bookmarks" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <FaStar size={24} />
              </div>
              {menuActive ? (
                <span className="flex items-center gap-2">
                  Bookmarks
                </span>
              ) : (
                ""
              )}
            </Link> */}
          </div>
        </nav>

        {/* My Profile - Separate at bottom */}
        <div className="px-3 pb-3">
          <Link
            href={"/student/profile"}
            className={`sidebar-btn flex gap-2 items-center ${
              pathname === "/profile" ? "sidebar-active" : ""
            }`}
          >
            <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
              <BsPersonCircle size={24} />
            </div>
            {menuActive ? (
              <span className="flex items-center gap-2">
                My Profile
              </span>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;