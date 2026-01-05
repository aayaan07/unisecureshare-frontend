"use client";
import { useState } from "react";
import { MdAssignment, MdSchedule, MdPerson } from "react-icons/md";
import { FiUpload, FiX } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { BsFileEarmarkText, BsCheckCircleFill, BsClockFill } from "react-icons/bs";

const AssignmentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCourse, setFilterCourse] = useState("all");
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [comments, setComments] = useState("");

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Binary Search Tree Implementation",
      courseCode: "CSE-201",
      courseName: "Data Structures & Algorithms",
      instructor: "Dr. Rajesh Kumar",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      dueDate: "2024-12-28",
      submittedDate: null,
      status: "pending",
      priority: "high",
      maxMarks: 100,
      description: "Implement a complete Binary Search Tree with insertion, deletion, and traversal operations.",
      attachments: 2,
      timeLeft: "5 days"
    },
    {
      id: 2,
      title: "Database Normalization Assignment",
      courseCode: "CSE-202",
      courseName: "Database Management Systems",
      instructor: "Prof. Priya Sharma",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      dueDate: "2024-12-26",
      submittedDate: null,
      status: "pending",
      priority: "high",
      maxMarks: 50,
      description: "Normalize the given database schema up to 3NF and explain each step.",
      attachments: 1,
      timeLeft: "3 days"
    },
    {
      id: 3,
      title: "Process Scheduling Algorithms",
      courseCode: "CSE-203",
      courseName: "Operating Systems",
      instructor: "Dr. Amit Verma",
      color: "text-green-500",
      bgColor: "bg-green-50",
      dueDate: "2025-01-05",
      submittedDate: null,
      status: "pending",
      priority: "medium",
      maxMarks: 75,
      description: "Compare FCFS, SJF, and Round Robin scheduling algorithms with examples.",
      attachments: 3,
      timeLeft: "13 days"
    },
    {
      id: 4,
      title: "Network Protocol Analysis",
      courseCode: "CSE-301",
      courseName: "Computer Networks",
      instructor: "Dr. Sneha Gupta",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      dueDate: "2024-12-20",
      submittedDate: null,
      status: "overdue",
      priority: "critical",
      maxMarks: 100,
      description: "Analyze TCP/IP and UDP protocols with packet capture using Wireshark.",
      attachments: 1,
      timeLeft: "Overdue"
    },
    {
      id: 5,
      title: "Linear Regression Model",
      courseCode: "CSE-302",
      courseName: "Machine Learning",
      instructor: "Prof. Vikram Singh",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      dueDate: "2024-12-15",
      submittedDate: "2024-12-14",
      status: "submitted",
      priority: "completed",
      maxMarks: 100,
      receivedMarks: 95,
      description: "Build and evaluate a linear regression model on the given dataset.",
      attachments: 2,
      timeLeft: "Submitted"
    },
    {
      id: 6,
      title: "Software Testing Report",
      courseCode: "CSE-204",
      courseName: "Software Engineering",
      instructor: "Dr. Anjali Mehta",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      dueDate: "2024-12-10",
      submittedDate: "2024-12-09",
      status: "submitted",
      priority: "completed",
      maxMarks: 50,
      receivedMarks: 48,
      description: "Write a comprehensive testing report including unit and integration tests.",
      attachments: 1,
      timeLeft: "Submitted"
    },
    {
      id: 7,
      title: "AVL Tree Visualization",
      courseCode: "CSE-201",
      courseName: "Data Structures & Algorithms",
      instructor: "Dr. Rajesh Kumar",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      dueDate: "2025-01-10",
      submittedDate: null,
      status: "pending",
      priority: "low",
      maxMarks: 80,
      description: "Create an interactive visualization of AVL tree operations.",
      attachments: 0,
      timeLeft: "18 days"
    },
    {
      id: 8,
      title: "SQL Query Optimization",
      courseCode: "CSE-202",
      courseName: "Database Management Systems",
      instructor: "Prof. Priya Sharma",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      dueDate: "2025-01-03",
      submittedDate: null,
      status: "pending",
      priority: "medium",
      maxMarks: 60,
      description: "Optimize complex SQL queries and analyze their performance.",
      attachments: 2,
      timeLeft: "11 days"
    }
  ]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    if (ext === 'pdf') return <BsFileEarmarkText className="text-red-500" />;
    if (['doc', 'docx'].includes(ext)) return <BsFileEarmarkText className="text-blue-500" />;
    if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return <BsFileEarmarkText className="text-purple-500" />;
    return <BsFileEarmarkText className="text-slate-500" />;
  };

  const openUploadModal = (assignment) => {
    setSelectedAssignment(assignment);
    setUploadModalOpen(true);
    setSelectedFiles([]);
    setComments("");
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
    setSelectedAssignment(null);
    setSelectedFiles([]);
    setComments("");
  };

  const handleSubmit = () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload");
      return;
    }

    setAssignments(prev => prev.map(a => 
      a.id === selectedAssignment.id 
        ? { ...a, status: "submitted", submittedDate: new Date().toISOString().split('T')[0] }
        : a
    ));

    alert("Assignment submitted successfully!");
    closeUploadModal();
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-50 text-red-600 border border-red-200";
      case "high":
        return "bg-orange-50 text-orange-600 border border-orange-200";
      case "medium":
        return "bg-yellow-50 text-yellow-600 border border-yellow-200";
      case "low":
        return "bg-blue-50 text-blue-600 border border-blue-200";
      case "completed":
        return "bg-green-50 text-green-600 border border-green-200";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-200";
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case "critical":
        return "Critical";
      case "high":
        return "High Priority";
      case "medium":
        return "Medium Priority";
      case "low":
        return "Low Priority";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  const courses = [...new Set(assignments.map(a => a.courseCode))];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.courseCode.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || assignment.status === filterStatus;
    const matchesCourse = filterCourse === "all" || assignment.courseCode === filterCourse;
    
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const pendingCount = assignments.filter(a => a.status === "pending").length;
  const submittedCount = assignments.filter(a => a.status === "submitted").length;
  const overdueCount = assignments.filter(a => a.status === "overdue").length;

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const colors = [
    "text-teal-500",
    "text-pink-500",
    "text-orange-500",
    "text-blue-500",
    "text-purple-500",
    "text-yellow-500",
  ];

  function getRandomElement(arr) {
    if (arr.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start space-y-2">
      {/* Header Section */}
      <div className="w-fit">
        <b className="text-slate-800 font-normal text-8xl" style={{fontFamily: 'Averia Serif Libre, serif'}}>
          Assignments
        </b>
      </div>

      <div className="text-2xl text-slate-800/70 text-left my-3" style={{fontFamily: 'Poppins, sans-serif'}}>
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>Student XYZ</span>
        </small>
        <br />
        <small>
          Track and submit your <span className="font-semibold">course assignments</span>
        </small>
      </div>

      {/* Quick Stats */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-blue-50 text-blue-500 p-3 rounded-lg">
              <MdAssignment size={24} />
            </div>
            <div className="flex-1">
              <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Total</p>
              <p className="text-3xl font-bold text-slate-800">{assignments.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-orange-50 text-orange-500 p-3 rounded-lg">
              <BsClockFill size={24} />
            </div>
            <div className="flex-1">
              <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Pending</p>
              <p className="text-3xl font-bold text-slate-800">{pendingCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-50 text-green-500 p-3 rounded-lg">
              <BsCheckCircleFill size={24} />
            </div>
            <div className="flex-1">
              <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Submitted</p>
              <p className="text-3xl font-bold text-slate-800">{submittedCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-red-50 text-red-500 p-3 rounded-lg">
              <MdSchedule size={24} />
            </div>
            <div className="flex-1">
              <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Overdue</p>
              <p className="text-3xl font-bold text-red-600">{overdueCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="w-full mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search assignments by title, course, or code..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-5 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition text-slate-700"
          style={{fontFamily: 'Poppins, sans-serif'}}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-5 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition text-slate-700 font-medium"
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="submitted">Submitted</option>
          <option value="overdue">Overdue</option>
        </select>
        <select
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
          className="px-5 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition text-slate-700 font-medium"
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          <option value="all">All Courses</option>
          {courses.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      {/* Assignments Section */}
      <div className="my-5 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
          <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          Your Assignments
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col"
              >
                {/* Assignment Header */}
                <div className={`${assignment.bgColor} p-5 border-b border-slate-200`}>
                  <div className="flex items-start gap-3">
                    <div className={`${assignment.color} text-4xl`}>
                      <MdAssignment />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {assignment.courseCode}
                      </p>
                      <h3 className="text-lg font-bold text-slate-800 line-clamp-2 min-h-[3.5rem]" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {assignment.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Assignment Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Priority Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 w-fit ${getPriorityColor(assignment.priority)}`}>
                    <span className="text-xs font-bold" style={{fontFamily: 'Poppins, sans-serif'}}>{getPriorityText(assignment.priority)}</span>
                  </div>

                  {/* Course Name */}
                  <p className="text-sm text-slate-600 font-medium mb-4 min-h-[1.25rem]" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {assignment.courseName}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 min-h-[2.5rem]" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {assignment.description}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-slate-400">
                      <MdPerson size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Instructor</p>
                      <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{assignment.instructor}</p>
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-slate-400">
                      <MdSchedule size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Due Date</p>
                      <p className={`text-sm font-semibold ${assignment.status === "overdue" ? "text-red-600" : "text-slate-800"}`} style={{fontFamily: 'Poppins, sans-serif'}}>
                        {new Date(assignment.dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })} • {assignment.timeLeft}
                      </p>
                    </div>
                  </div>

                  {/* Marks Info */}
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Max Marks</p>
                        <p className="text-lg font-bold text-slate-800">{assignment.maxMarks}</p>
                      </div>
                      {assignment.status === "submitted" && assignment.receivedMarks ? (
                        <>
                          <div className="w-px h-8 bg-slate-300" />
                          <div className="text-center flex-1">
                            <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Received</p>
                            <p className="text-lg font-bold text-green-600">{assignment.receivedMarks}</p>
                          </div>
                        </>
                      ) : (
                        <div className="flex-1"></div>
                      )}
                    </div>
                  </div>

                  {/* Spacer to push footer to bottom */}
                  <div className="flex-1"></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <BsFileEarmarkText size={14} />
                      <span className="text-xs font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>{assignment.attachments} Files</span>
                    </div>
                    {assignment.status === "pending" && (
                      <button 
                        onClick={() => openUploadModal(assignment)}
                        className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition text-sm font-semibold"
                        style={{fontFamily: 'Poppins, sans-serif'}}
                      >
                        <FiUpload size={14} />
                        Submit
                      </button>
                    )}
                    {assignment.status === "submitted" && (
                      <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-200">
                        <BsCheckCircleFill size={12} />
                        <span className="text-xs font-bold" style={{fontFamily: 'Poppins, sans-serif'}}>Submitted</span>
                      </div>
                    )}
                    {assignment.status === "overdue" && (
                      <button 
                        onClick={() => openUploadModal(assignment)}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-semibold"
                        style={{fontFamily: 'Poppins, sans-serif'}}
                      >
                        <FiUpload size={14} />
                        Late Submit
                      </button>
                    )}
                  </div>

                  {/* Submitted Date */}
                  {assignment.submittedDate && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Submitted On</p>
                      <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {new Date(assignment.submittedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-lg border border-slate-200">
              <div className="text-slate-300 text-6xl mb-4">
                <MdAssignment className="mx-auto" />
              </div>
              <p className="text-slate-500 text-lg font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>No assignments found</p>
              <p className="text-slate-400 text-sm mt-2" style={{fontFamily: 'Poppins, sans-serif'}}>Try a different search term or filter</p>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {uploadModalOpen && selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-400 to-red-400 p-6 text-white relative">
              <button
                onClick={closeUploadModal}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
              >
                <FiX size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Submit Assignment</h2>
              <p className="text-sm opacity-90" style={{fontFamily: 'Poppins, sans-serif'}}>{selectedAssignment.title}</p>
              <p className="text-xs opacity-75 mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>{selectedAssignment.courseCode} - {selectedAssignment.courseName}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Assignment Details */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Due Date</p>
                    <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {new Date(selectedAssignment.dueDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Max Marks</p>
                    <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{selectedAssignment.maxMarks}</p>
                  </div>
                </div>
              </div>

              {/* File Upload Area */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Upload Files
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-orange-400 transition cursor-pointer bg-slate-50">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-4xl mb-3 text-slate-400"><FiUpload className="mx-auto" /></div>
                    <p className="text-sm font-medium text-slate-700 mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                    </p>
                  </label>
                </div>
              </div>

              {/* Selected Files List */}
              {selectedFiles.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Selected Files ({selectedFiles.length})
                  </label>
                  <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {getFileIcon(file.name)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{file.name}</p>
                            <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>{(file.size / 1024).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="p-2 hover:bg-red-100 rounded-full transition text-red-500"
                        >
                          <FiX size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments Section
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Comments (Optional)
                </label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Add any comments or notes for your instructor..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none text-slate-700"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                />
              </div> */}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={closeUploadModal}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition font-semibold"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-lg hover:shadow-lg transition font-semibold flex items-center gap-2"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                >
                  <FiUpload size={18} />
                  Submit Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentsPage;