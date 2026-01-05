"use client";
import { FiUpload, FiTag } from "react-icons/fi";
import { FaFileLines } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { useState } from 'react';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadForm, setUploadForm] = useState({
    fileName: "",
    section: "",
    category: "",
    tag: ""
  });
  const [isPublicAnnouncement, setIsPublicAnnouncement] = useState(false);
  const [uploadType, setUploadType] = useState(""); // public/hidden
  const [uploadDestination, setUploadDestination] = useState("section"); // section/private

  const colors = [
    "bg-teal-500/40", "bg-pink-500/40", "bg-orange-500/40",
    "bg-blue-500/40", "bg-purple-500/40", "bg-yellow-500/40",
  ];

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleUploadSubmit = () => {
    // Validation
    if (!selectedFile || !uploadForm.fileName) {
      alert("Please select a file and provide a file name");
      return;
    }

    if (uploadDestination === "section" && !isPublicAnnouncement && !uploadForm.section) {
        alert("Please provide a section name");
        return;
    }

    // Logic for processing the upload
    const payload = {
      id: Date.now(),
      name: uploadForm.fileName,
      originalName: selectedFile.name,
      tag: uploadForm.tag,
      destination: uploadDestination,
      isAnnouncement: isPublicAnnouncement,
      section: isPublicAnnouncement ? "N/A" : uploadForm.section,
      category: uploadForm.category,
      visibility: uploadType,
    };

    console.log("Submitting File:", payload);
    alert("File uploaded successfully!");
    
    // Reset form
    setSelectedFile(null);
    setUploadForm({ fileName: "", section: "", category: "", tag: "" });
    setIsPublicAnnouncement(false);
    setUploadType("");
    setUploadDestination("section");
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Upload Document</h2>
          
          <div className="space-y-6">
            {/* 1. File Dropzone */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors bg-gray-50">
              <input
                type="file"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <FiUpload size={32} className="text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-600 font-medium mb-1">
                  {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-sm text-gray-400">PDF, DOC, PPT up to 10MB</p>
              </label>
            </div>

            {/* 2. File Name and Tag */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">File Name</label>
              <div className="relative">
                <FaFileLines className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={uploadForm.fileName}
                  onChange={(e) => setUploadForm({...uploadForm, fileName: e.target.value})}
                  placeholder="e.g. Midterm Study Guide"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tag</label>
              <div className="relative">
                <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={uploadForm.tag}
                  onChange={(e) => setUploadForm({...uploadForm, tag: e.target.value})}
                  placeholder="e.g. Midterm Study Guide"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* 3. Destination Selection */}
            <div className="">
              <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">Upload Destination</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dest"
                    checked={uploadDestination === "section"}
                    onChange={() => setUploadDestination("section")}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700 font-medium">Class / Section</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dest"
                    checked={uploadDestination === "private"}
                    onChange={() => setUploadDestination("private")}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700 font-medium">Private (Personal Storage)</span>
                </label>
              </div>
            </div>

            {/* 4. Section & Visibility Logic (Only if Section is selected) */}
            {uploadDestination === "section" && (
              <div className="space-y-6 py-2">
                
                {/* Public Announcement Toggle */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isPublicAnnouncement}
                    onChange={(e) => {
                      setIsPublicAnnouncement(e.target.checked);
                      setUploadForm({...uploadForm, category: "", section: ""});
                    }}
                    className="w-5 h-5 rounded"
                  />
                  <span className="text-gray-700 font-semibold  transition">Make it a Public Announcement</span>
                </label>

                {/* Section Input */}
                {!isPublicAnnouncement && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Section</label>
                    <div className="relative">
                      <IoBookOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={uploadForm.section}
                        onChange={(e) => setUploadForm({...uploadForm, section: e.target.value})}
                        placeholder="e.g. CS-101"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>
                )}

                {/* Category Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <div className="relative">
                    <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={uploadForm.category}
                      onChange={(e) => setUploadForm({...uploadForm, category: e.target.value})}
                      className="w-full pl-12 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      {isPublicAnnouncement ? (
                        <>
                          <option value="Time-Table">Time-Table</option>
                          <option value="Datesheet">Datesheet</option>
                          <option value="Circular">Circular</option>
                          <option value="Hackathon">Hackathon</option>
                        </>
                      ) : (
                        <>
                          <option value="Notes">Notes</option>
                          <option value="Assignment">Assignment</option>
                          <option value="Quiz">Quiz</option>
                          <option value="DPP">DPP</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Public/Hidden Radio */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Visibility</label>
                  <div className="flex gap-4">
                    {["public", "hidden"].map((type) => (
                      <label key={type} className="capitalize flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 hover:bg-gray-100 transition">
                        <input
                          type="radio"
                          name="visibility"
                          value={type}
                          checked={uploadType === type}
                          onChange={(e) => setUploadType(e.target.value)}
                          className="w-4 h-4"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleUploadSubmit}
              className={`w-full ${getRandomElement(colors)} text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 duration-200`}
            >
              Confirm & Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}