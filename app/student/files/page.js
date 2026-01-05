"use client";
import React, { useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaVideo,
  FaImage,
  FaFileAlt,
  FaUpload,
  FaStar,
  FaRegStar,
  FaEllipsisV,
  FaSearch,
  FaList,
  FaTh,
  FaTrash,
  FaDownload,
  FaShare,
} from "react-icons/fa";

const FilesPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const colors = [
    "bg-teal-500/40",
    "bg-pink-500/40",
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-purple-500/40",
    "bg-yellow-500/40",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [folders] = useState([
    { id: 1, name: "Course Materials", itemCount: 24, modified: "2024-12-20", color: getRandomColor() },
    { id: 2, name: "Assignments", itemCount: 12, modified: "2024-12-18", color: getRandomColor() },
    { id: 3, name: "Projects", itemCount: 8, modified: "2024-12-15", color: getRandomColor() },
    { id: 4, name: "Notes", itemCount: 35, modified: "2024-12-10", color: getRandomColor() },
  ]);

  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Data Structures Lecture 1.pdf",
      type: "pdf",
      size: "2.4 MB",
      modified: "2024-12-20",
      bookmarked: true,
      color: "bg-teal-500/40",
    },
    {
      id: 2,
      name: "Assignment Report.docx",
      type: "word",
      size: "1.2 MB",
      modified: "2024-12-19",
      bookmarked: false,
      color: "bg-pink-500/40",
    },
    {
      id: 3,
      name: "Budget Analysis.xlsx",
      type: "excel",
      size: "856 KB",
      modified: "2024-12-18",
      bookmarked: false,
      color: "bg-orange-500/40",
    },
    {
      id: 4,
      name: "Tutorial Video.mp4",
      type: "video",
      size: "45.2 MB",
      modified: "2024-12-15",
      bookmarked: true,
      color: "bg-blue-500/40",
    },
    {
      id: 5,
      name: "Diagram.png",
      type: "image",
      size: "1.1 MB",
      modified: "2024-12-12",
      bookmarked: false,
      color: "bg-purple-500/40",
    },
  ]);

  const getFileIcon = (type, size = 24) => {
    const iconProps = { size };
    switch (type) {
      case "pdf":
        return <FaFilePdf {...iconProps} />;
      case "word":
        return <FaFileWord {...iconProps} />;
      case "excel":
        return <FaFileExcel {...iconProps} />;
      case "video":
        return <FaVideo {...iconProps} />;
      case "image":
        return <FaImage {...iconProps} />;
      default:
        return <FaFileAlt {...iconProps} />;
    }
  };

  const toggleBookmark = (fileId) => {
    setFiles(
      files.map((file) =>
        file.id === fileId ? { ...file, bookmarked: !file.bookmarked } : file
      )
    );
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--lightShade)] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[var(--pBlack)] flex items-center gap-3">
              <FaFolder />
              My Files
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--pBlack)] rounded-lg hover:bg-[var(--pBlack)] hover:text-[var(--primary)] transition-colors font-semibold">
              <FaUpload />
              Upload Files
            </button>
          </div>
          <p className="text-gray-600">Manage and organize your files</p>
        </div>

        {/* Toolbar */}
        <div className="bg-[var(--darkShade)] rounded-2xl shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 relative w-full md:w-auto">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--lightShade)] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--pBlack)]"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-[var(--lightShade)] p-1 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all ${
                  viewMode === "grid"
                    ? "bg-[var(--primary)] text-[var(--pBlack)]"
                    : "text-gray-600 hover:text-[var(--pBlack)]"
                }`}
              >
                <FaTh size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all ${
                  viewMode === "list"
                    ? "bg-[var(--primary)] text-[var(--pBlack)]"
                    : "text-gray-600 hover:text-[var(--pBlack)]"
                }`}
              >
                <FaList size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Folders Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--pBlack)] mb-4">Folders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <div
                key={folder.id}
                className={`${folder.color} rounded-2xl shadow hover:shadow-lg transition-all duration-200 p-5 cursor-pointer group hover:scale-[1.02]`}
              >
                <div className="flex items-center justify-between mb-3">
                  <FaFolderOpen className="text-[var(--pBlack)]" size={32} />
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaEllipsisV className="text-[var(--pBlack)]" />
                  </button>
                </div>
                <h3 className="font-semibold text-[var(--pBlack)] mb-1">{folder.name}</h3>
                <p className="text-sm text-gray-700">{folder.itemCount} items</p>
                <p className="text-xs text-gray-600 mt-1">
                  {new Date(folder.modified).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Files Section */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--pBlack)] mb-4">Recent Files</h2>
          
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className={`${file.color} rounded-2xl shadow hover:shadow-lg transition-all duration-200 p-5 group hover:scale-[1.02]`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-white/50 rounded-lg">
                      {getFileIcon(file.type, 28)}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleBookmark(file.id)}
                        className="transition-all"
                      >
                        {file.bookmarked ? (
                          <FaStar className="text-yellow-600" size={18} />
                        ) : (
                          <FaRegStar className="text-[var(--pBlack)] opacity-50 hover:opacity-100" size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-[var(--pBlack)] text-sm line-clamp-2 mb-3">
                    {file.name}
                  </h3>

                  <div className="space-y-1 text-xs text-gray-700 mb-4">
                    <p>Size: {file.size}</p>
                    <p>{new Date(file.modified).toLocaleDateString()}</p>
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-[var(--pBlack)] text-white rounded-lg hover:bg-opacity-90 transition-all text-xs font-semibold">
                      <FaDownload size={12} />
                      Download
                    </button>
                    <button className="px-3 py-2 bg-white/60 text-[var(--pBlack)] rounded-lg hover:bg-white transition-all">
                      <FaShare size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[var(--darkShade)] rounded-2xl shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-[var(--lightShade)]">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-700 uppercase">
                      Name
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-700 uppercase">
                      Size
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-700 uppercase">
                      Modified
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600/20">
                  {filteredFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-[var(--lightShade)] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${file.color} rounded-lg`}>
                            {getFileIcon(file.type, 20)}
                          </div>
                          <span className="font-medium text-[var(--pBlack)]">{file.name}</span>
                          {file.bookmarked && (
                            <FaStar className="text-yellow-600" size={14} />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{file.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(file.modified).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => toggleBookmark(file.id)}
                            className="p-2 hover:bg-[var(--lightShade)] rounded-lg transition-all"
                          >
                            {file.bookmarked ? (
                              <FaStar className="text-yellow-600" size={16} />
                            ) : (
                              <FaRegStar className="text-gray-600" size={16} />
                            )}
                          </button>
                          <button className="p-2 hover:bg-[var(--lightShade)] rounded-lg transition-all">
                            <FaDownload className="text-gray-700" size={16} />
                          </button>
                          <button className="p-2 hover:bg-[var(--lightShade)] rounded-lg transition-all">
                            <FaShare className="text-gray-700" size={16} />
                          </button>
                          <button className="p-2 hover:bg-[var(--lightShade)] rounded-lg transition-all">
                            <FaEllipsisV className="text-gray-700" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredFiles.length === 0 && (
          <div className="bg-[var(--darkShade)] rounded-2xl shadow p-12 text-center">
            <FaFileAlt className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-[var(--pBlack)] mb-2">No files found</h3>
            <p className="text-gray-600">
              {searchTerm
                ? "Try adjusting your search"
                : "Upload files to get started"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesPage;