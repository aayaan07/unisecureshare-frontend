"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoBookOutline, IoArrowBack } from "react-icons/io5";
import { FaUserTie, FaFileAlt, FaEye, FaCheckCircle, FaCircle } from "react-icons/fa";
import { MdAssignment, MdQuiz, MdSchedule } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiBook } from "react-icons/bi";

const CourseDetailPage = () => {
  const params = useParams();
  const courseCode = params?.courseCode || "CSE-201";
  
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedMaterials, setCheckedMaterials] = useState({});

  const courseInfo = {
    "CSE-201": {
      name: "Data Structures & Algorithms",
      code: "CSE-201",
      instructor: "Dr. Rajesh Kumar",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      buttonColor: "bg-blue-500",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      description: "Learn fundamental data structures and algorithms for efficient problem-solving.",
    },
    "CSE-202": {
      name: "Database Management Systems",
      code: "CSE-202",
      instructor: "Prof. Priya Sharma",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      buttonColor: "bg-purple-500",
      schedule: "Tue, Thu - 11:00 AM",
      description: "Master database design, SQL, normalization, and modern database management principles.",
    },
    "CSE-203": {
      name: "Operating Systems",
      code: "CSE-203",
      instructor: "Dr. Amit Verma",
      color: "text-green-500",
      bgColor: "bg-green-50",
      buttonColor: "bg-green-500",
      schedule: "Mon, Wed - 2:00 PM",
      description: "Explore process management, memory management, and file systems in modern operating systems.",
    },
    "CSE-301": {
      name: "Computer Networks",
      code: "CSE-301",
      instructor: "Dr. Sneha Gupta",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      buttonColor: "bg-orange-500",
      schedule: "Tue, Fri - 10:00 AM",
      description: "Understand network protocols, TCP/IP, routing, and modern networking technologies.",
    },
    "CSE-302": {
      name: "Machine Learning",
      code: "CSE-302",
      instructor: "Prof. Vikram Singh",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      buttonColor: "bg-pink-500",
      schedule: "Mon, Thu - 3:00 PM",
      description: "Dive into supervised and unsupervised learning, neural networks, and deep learning fundamentals.",
    },
    "CSE-204": {
      name: "Software Engineering",
      code: "CSE-204",
      instructor: "Dr. Anjali Mehta",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      buttonColor: "bg-teal-500",
      schedule: "Wed, Fri - 1:00 PM",
      description: "Learn software development lifecycle, design patterns, testing methodologies, and project management.",
    },
  };

  const course = courseInfo[courseCode] || courseInfo["CSE-201"];

  const allCourseMaterials = {
    "CSE-201": [
      { id: 1, title: "Introduction to Arrays and Linked Lists", type: "notes", date: "20/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 2, title: "Quiz 1 - Basic Data Structures", type: "quiz", date: "18/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 3, title: "Tree Traversal Algorithms", type: "notes", date: "15/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 4, title: "Assignment 1 - Stack Implementation", type: "assignment", date: "12/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 5, title: "Practice Problems - Sorting Algorithms", type: "practice", date: "10/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 6, title: "Graph Algorithms - DFS and BFS", type: "notes", date: "08/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 7, title: "Mid-Term Quiz - Part A", type: "quiz", date: "05/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 8, title: "Dynamic Programming Practice Set", type: "practice", date: "03/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
      { id: 9, title: "Assignment 2 - Binary Search Tree", type: "assignment", date: "01/11/2024", uploadedBy: "Dr. Rajesh Kumar" },
    ],
    "CSE-202": [
      { id: 1, title: "Introduction to DBMS Concepts", type: "notes", date: "19/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 2, title: "SQL Basics and Queries", type: "notes", date: "17/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 3, title: "Quiz 1 - ER Diagrams", type: "quiz", date: "15/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 4, title: "Normalization Techniques", type: "notes", date: "13/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 5, title: "Assignment 1 - Database Design", type: "assignment", date: "11/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 6, title: "Transaction Management Practice", type: "practice", date: "09/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 7, title: "Indexing and B-Trees", type: "notes", date: "06/11/2024", uploadedBy: "Prof. Priya Sharma" },
      { id: 8, title: "Quiz 2 - SQL Advanced", type: "quiz", date: "04/11/2024", uploadedBy: "Prof. Priya Sharma" },
    ],
    "CSE-203": [
      { id: 1, title: "Introduction to Operating Systems", type: "notes", date: "21/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 2, title: "Process Scheduling Algorithms", type: "notes", date: "18/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 3, title: "Quiz 1 - Process Management", type: "quiz", date: "16/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 4, title: "Memory Management Techniques", type: "notes", date: "14/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 5, title: "Assignment 1 - CPU Scheduling", type: "assignment", date: "12/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 6, title: "Deadlock Prevention Practice", type: "practice", date: "10/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 7, title: "File System Implementation", type: "notes", date: "07/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 8, title: "Quiz 2 - Memory Management", type: "quiz", date: "05/11/2024", uploadedBy: "Dr. Amit Verma" },
      { id: 9, title: "Assignment 2 - Page Replacement", type: "assignment", date: "02/11/2024", uploadedBy: "Dr. Amit Verma" },
    ],
    "CSE-301": [
      { id: 1, title: "Computer Networks Fundamentals", type: "notes", date: "22/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 2, title: "OSI Model Explained", type: "notes", date: "20/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 3, title: "Quiz 1 - Network Layers", type: "quiz", date: "17/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 4, title: "TCP/IP Protocol Suite", type: "notes", date: "15/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 5, title: "Assignment 1 - Network Design", type: "assignment", date: "13/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 6, title: "Routing Algorithms Practice", type: "practice", date: "11/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 7, title: "Network Security Basics", type: "notes", date: "08/11/2024", uploadedBy: "Dr. Sneha Gupta" },
      { id: 8, title: "Quiz 2 - Transport Layer", type: "quiz", date: "06/11/2024", uploadedBy: "Dr. Sneha Gupta" },
    ],
    "CSE-302": [
      { id: 1, title: "Introduction to Machine Learning", type: "notes", date: "23/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 2, title: "Supervised Learning Algorithms", type: "notes", date: "21/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 3, title: "Quiz 1 - ML Fundamentals", type: "quiz", date: "19/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 4, title: "Linear Regression Implementation", type: "notes", date: "16/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 5, title: "Assignment 1 - Classification Model", type: "assignment", date: "14/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 6, title: "Neural Networks Practice", type: "practice", date: "12/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 7, title: "Deep Learning Concepts", type: "notes", date: "09/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 8, title: "Quiz 2 - Neural Networks", type: "quiz", date: "07/11/2024", uploadedBy: "Prof. Vikram Singh" },
      { id: 9, title: "Assignment 2 - CNN Implementation", type: "assignment", date: "04/11/2024", uploadedBy: "Prof. Vikram Singh" },
    ],
    "CSE-204": [
      { id: 1, title: "Software Development Lifecycle", type: "notes", date: "24/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 2, title: "Agile Methodology Overview", type: "notes", date: "22/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 3, title: "Quiz 1 - SDLC Models", type: "quiz", date: "20/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 4, title: "Design Patterns in Software", type: "notes", date: "17/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 5, title: "Assignment 1 - Project Planning", type: "assignment", date: "15/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 6, title: "Testing Strategies Practice", type: "practice", date: "13/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 7, title: "Software Quality Assurance", type: "notes", date: "10/11/2024", uploadedBy: "Dr. Anjali Mehta" },
      { id: 8, title: "Quiz 2 - Design Patterns", type: "quiz", date: "08/11/2024", uploadedBy: "Dr. Anjali Mehta" },
    ],
  };

  const courseMaterials = allCourseMaterials[courseCode] || allCourseMaterials["CSE-201"];

  const toggleMaterialCheck = (materialId) => {
    setCheckedMaterials(prev => ({
      ...prev,
      [courseCode]: {
        ...prev[courseCode],
        [materialId]: !prev[courseCode]?.[materialId]
      }
    }));
  };

  const calculateProgress = () => {
    const totalMaterials = courseMaterials.length;
    const checkedCount = Object.values(checkedMaterials[courseCode] || {}).filter(Boolean).length;
    return Math.round((checkedCount / totalMaterials) * 100);
  };

  const courseProgress = calculateProgress();

  const getTypeInfo = (type) => {
    switch(type) {
      case "notes":
        return { icon: HiOutlineDocumentText, label: "Notes", color: "text-blue-500", bgColor: "bg-blue-50", buttonColor: "bg-blue-500" };
      case "quiz":
        return { icon: MdQuiz, label: "Quiz", color: "text-purple-500", bgColor: "bg-purple-50", buttonColor: "bg-purple-500" };
      case "assignment":
        return { icon: MdAssignment, label: "Assignment", color: "text-orange-500", bgColor: "bg-orange-50", buttonColor: "bg-orange-500" };
      case "practice":
        return { icon: BiBook, label: "Practice", color: "text-green-500", bgColor: "bg-green-50", buttonColor: "bg-green-500" };
      default:
        return { icon: FaFileAlt, label: "File", color: "text-slate-500", bgColor: "bg-slate-50", buttonColor: "bg-slate-500" };
    }
  };

  const filteredMaterials = courseMaterials
    .filter(material => activeTab === "all" || material.type === activeTab)
    .filter(material => material.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const materialCounts = {
    all: courseMaterials.length,
    notes: courseMaterials.filter(m => m.type === "notes").length,
    quiz: courseMaterials.filter(m => m.type === "quiz").length,
    assignment: courseMaterials.filter(m => m.type === "assignment").length,
    practice: courseMaterials.filter(m => m.type === "practice").length,
  };

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start">
      {/* Back Button */}
      <Link
        href="/courses"
        className="mb-4 flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition"
        style={{fontFamily: 'Poppins, sans-serif'}}
      >
        <IoArrowBack size={20} />
        Back to My Courses
      </Link>

      {/* Course Header */}
      <div className="w-fit mb-3">
        <b className="text-slate-800 font-normal text-6xl" style={{fontFamily: 'Averia Serif Libre, serif'}}>
          {course.name}
        </b>
      </div>

      <div className="text-lg text-slate-600 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
        {course.description}
      </div>

      {/* Course Info Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-slate-400">
              <FaUserTie size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>Instructor</p>
              <p className="font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{course.instructor}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-slate-400">
              <MdSchedule size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>Schedule</p>
              <p className="font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{course.schedule}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-slate-400">
              <FaFileAlt size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>Course Progress</p>
              <p className="font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{courseProgress}% Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full mb-6">
        <input
          type="text"
          placeholder="Search course materials..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition text-slate-700"
          style={{fontFamily: 'Poppins, sans-serif'}}
        />
      </div>

      {/* Filter Tabs */}
      <div className="w-full mb-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeTab === "all"
                ? "bg-slate-800 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            All Materials ({materialCounts.all})
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "notes"
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <HiOutlineDocumentText size={18} />
            Notes ({materialCounts.notes})
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "quiz"
                ? "bg-purple-500 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <MdQuiz size={18} />
            Quizzes ({materialCounts.quiz})
          </button>
          <button
            onClick={() => setActiveTab("assignment")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "assignment"
                ? "bg-orange-500 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <MdAssignment size={18} />
            Assignments ({materialCounts.assignment})
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "practice"
                ? "bg-green-500 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <BiBook size={18} />
            Practice ({materialCounts.practice})
          </button>
        </div>
      </div>

      {/* Materials Section */}
      <div className="my-5 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
          <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          Course Materials
        </h3>

        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMaterials.map((material) => {
              const typeInfo = getTypeInfo(material.type);
              const Icon = typeInfo.icon;
              
              return (
                <div
                  key={material.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 flex flex-col"
                >
                  {/* Material Header */}
                  <div className={`${typeInfo.bgColor} p-5 border-b border-slate-200`}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`${typeInfo.color} text-3xl flex-shrink-0`}>
                        <Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 mb-2 line-clamp-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                          {material.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeInfo.color} ${typeInfo.bgColor}`} style={{fontFamily: 'Poppins, sans-serif'}}>
                          {typeInfo.label}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleMaterialCheck(material.id)}
                        className="flex-shrink-0 transition-all"
                      >
                        {checkedMaterials[courseCode]?.[material.id] ? (
                          <FaCheckCircle size={24} className="text-green-500" />
                        ) : (
                          <FaCircle size={24} className="text-slate-300 hover:text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Material Info */}
                  <div className="p-5 space-y-3 flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>Uploaded</span>
                      <span className="font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{material.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>By</span>
                      <span className="font-semibold text-slate-800 truncate max-w-[180px]" style={{fontFamily: 'Poppins, sans-serif'}}>{material.uploadedBy}</span>
                    </div>
                  </div>

                  {/* Preview Button */}
                  <div className="p-5 pt-0">
                    <button className={`w-full ${typeInfo.buttonColor} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2`} style={{fontFamily: 'Poppins, sans-serif'}}>
                      <FaEye size={16} />
                      Preview
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="col-span-full text-center py-12 bg-white rounded-lg border border-slate-200">
            <div className="text-slate-300 text-6xl mb-4">
              <FaFileAlt className="mx-auto" />
            </div>
            <p className="text-slate-500 text-lg font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>No materials found</p>
            <p className="text-slate-400 text-sm mt-2" style={{fontFamily: 'Poppins, sans-serif'}}>
              {searchQuery ? "Try a different search term" : "No materials available in this category"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;