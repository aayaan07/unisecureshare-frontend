"use client";
import { useState } from "react";

const MyProgressPage = () => {
  const [viewType, setViewType] = useState("overview");

  const courses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CSE-1",
      instructor: "Dr. Rajesh Kumar",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      progress: 75,
      grade: "A",
      credits: 4,
      assignmentsCompleted: 8,
      assignmentsTotal: 10,
      quizScore: 85,
      midtermScore: 88,
      projectScore: 90
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CSE-202",
      instructor: "Prof. Priya Sharma",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      progress: 60,
      grade: "B+",
      credits: 3,
      assignmentsCompleted: 6,
      assignmentsTotal: 8,
      quizScore: 78,
      midtermScore: 82,
      projectScore: 85
    },
    {
      id: 3,
      name: "Operating Systems",
      code: "CSE-203",
      instructor: "Dr. Amit Verma",
      color: "text-green-500",
      bgColor: "bg-green-50",
      progress: 80,
      grade: "A-",
      credits: 4,
      assignmentsCompleted: 9,
      assignmentsTotal: 10,
      quizScore: 90,
      midtermScore: 86,
      projectScore: 92
    },
    {
      id: 4,
      name: "Computer Networks",
      code: "CSE-301",
      instructor: "Dr. Sneha Gupta",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      progress: 45,
      grade: "B",
      credits: 3,
      assignmentsCompleted: 5,
      assignmentsTotal: 9,
      quizScore: 75,
      midtermScore: 79,
      projectScore: 80
    },
    {
      id: 5,
      name: "Machine Learning",
      code: "CSE-302",
      instructor: "Prof. Vikram Singh",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      progress: 55,
      grade: "B+",
      credits: 4,
      assignmentsCompleted: 6,
      assignmentsTotal: 10,
      quizScore: 82,
      midtermScore: 84,
      projectScore: 87
    },
    {
      id: 6,
      name: "Software Engineering",
      code: "CSE-204",
      instructor: "Dr. Anjali Mehta",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      progress: 70,
      grade: "A-",
      credits: 3,
      assignmentsCompleted: 7,
      assignmentsTotal: 8,
      quizScore: 88,
      midtermScore: 85,
      projectScore: 89
    }
  ];

  const performanceMetrics = {
    currentGPA: 3.65,
    totalCredits: 21,
    assignmentsCompleted: 41,
    assignmentsTotal: 55,
    averageScore: 85
  };

  const recentActivities = [
    {
      id: 1,
      type: "assignment",
      title: "Binary Search Tree Implementation",
      course: "CSE-1",
      score: 95,
      date: "2024-12-14",
      icon: "📝"
    },
    {
      id: 2,
      type: "quiz",
      title: "Database Normalization Quiz",
      course: "CSE-202",
      score: 82,
      date: "2024-12-12",
      icon: "📋"
    },
    {
      id: 3,
      type: "assignment",
      title: "Process Scheduling Report",
      course: "CSE-203",
      score: 90,
      date: "2024-12-10",
      icon: "📝"
    },
    {
      id: 4,
      type: "midterm",
      title: "Mid-Semester Examination",
      course: "CSE-301",
      score: 79,
      date: "2024-12-08",
      icon: "📊"
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return "text-green-600 bg-green-50";
    if (grade.startsWith('B')) return "text-blue-600 bg-blue-50";
    if (grade.startsWith('C')) return "text-yellow-600 bg-yellow-50";
    return "text-slate-600 bg-slate-50";
  };

  const averageProgress = Math.round(
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length
  );

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
          My Progress
        </b>
      </div>

      <div className="text-2xl text-slate-800/70 text-left my-3" style={{fontFamily: 'Poppins, sans-serif'}}>
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>Student XYZ</span>
        </small>
        <br />
        <small>
          Track your <span className="font-semibold">academic journey</span> and achievements
        </small>
      </div>

      {/* Quick Stats */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Current GPA</p>
          <p className="text-3xl font-bold text-slate-800">{performanceMetrics.currentGPA}</p>
          <p className="text-xs text-slate-400 mt-1">out of 4.0</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Total Credits</p>
          <p className="text-3xl font-bold text-slate-800">{performanceMetrics.totalCredits}</p>
          <p className="text-xs text-slate-400 mt-1">this semester</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Assignments</p>
          <p className="text-3xl font-bold text-slate-800">
            {performanceMetrics.assignmentsCompleted}/{performanceMetrics.assignmentsTotal}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {Math.round((performanceMetrics.assignmentsCompleted / performanceMetrics.assignmentsTotal) * 100)}% completion
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Average Score</p>
          <p className="text-3xl font-bold text-slate-800">{performanceMetrics.averageScore}%</p>
          <p className="text-xs text-slate-400 mt-1">all assessments</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="w-full my-5 flex gap-3">
        <button
          onClick={() => setViewType("overview")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            viewType === "overview"
              ? "bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-sm"
              : "bg-white text-slate-700 border border-slate-200 hover:border-orange-400"
          }`}
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          📊 Overview
        </button>
        <button
          onClick={() => setViewType("courses")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            viewType === "courses"
              ? "bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-sm"
              : "bg-white text-slate-700 border border-slate-200 hover:border-orange-400"
          }`}
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          📚 Course Details
        </button>
        <button
          onClick={() => setViewType("assignments")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            viewType === "assignments"
              ? "bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-sm"
              : "bg-white text-slate-700 border border-slate-200 hover:border-orange-400"
          }`}
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          📝 Recent Activity
        </button>
      </div>

      {/* Overview View */}
      {viewType === "overview" && (
        <div className="w-full space-y-6">
          {/* Progress Summary Section */}
          <div className="my-5 w-full">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
              <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
              Progress Summary
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Overall Progress */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <p className="text-sm text-slate-600 font-semibold mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>Overall Course Progress</p>
                <div className="flex items-end gap-3 mb-3">
                  <p className="text-4xl font-bold text-slate-800">{averageProgress}%</p>
                  <p className="text-sm text-slate-500 mb-2">average</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-red-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${averageProgress}%` }}
                  />
                </div>
              </div>

              {/* Grade Distribution */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <p className="text-sm text-slate-600 font-semibold mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>Grade Distribution</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>A Grades</span>
                    <span className="text-sm font-bold text-green-600">
                      {courses.filter(c => c.grade.startsWith('A')).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>B Grades</span>
                    <span className="text-sm font-bold text-blue-600">
                      {courses.filter(c => c.grade.startsWith('B')).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>Total Courses</span>
                    <span className="text-sm font-bold text-slate-800">{courses.length}</span>
                  </div>
                </div>
              </div>

              {/* Credits Summary */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <p className="text-sm text-slate-600 font-semibold mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>Credit Summary</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>Current Credits</span>
                    <span className="text-sm font-bold text-slate-800">{performanceMetrics.totalCredits}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>GPA</span>
                    <span className="text-sm font-bold text-slate-800">{performanceMetrics.currentGPA}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>Status</span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      On Track
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trends Section */}
          <div className="my-5 w-full">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
              <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
              Performance Trends
            </h3>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border-b border-slate-100 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${course.color.replace('text-', 'bg-')}`} />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>{course.code}</p>
                          <p className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>{course.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(course.grade)}`} style={{fontFamily: 'Poppins, sans-serif'}}>
                          {course.grade}
                        </span>
                        <span className="text-sm font-bold text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>{course.progress}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${course.color.replace('text-', 'bg-')}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Details View */}
      {viewType === "courses" && (
        <div className="w-full">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
            <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
            Detailed Course Performance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200"
              >
                {/* Course Header */}
                <div className={`${course.bgColor} p-5 border-b border-slate-200`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {course.code}
                    </p>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/50 text-slate-700" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {course.credits} Credits
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>{course.name}</h3>
                  <p className="text-sm text-slate-600" style={{fontFamily: 'Poppins, sans-serif'}}>{course.instructor}</p>
                </div>

                {/* Course Body */}
                <div className="p-5 space-y-4">
                  {/* Grade and Progress */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Current Grade</p>
                      <span className={`px-4 py-2 rounded-lg text-lg font-bold ${getGradeColor(course.grade)}`} style={{fontFamily: 'Poppins, sans-serif'}}>
                        {course.grade}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Progress</p>
                      <p className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{course.progress}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${course.color.replace('text-', 'bg-')}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  {/* Assignments */}
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-600 font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>Assignments Completed</p>
                      <p className="text-sm font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {course.assignmentsCompleted}/{course.assignmentsTotal}
                      </p>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                      <p className="text-xs text-slate-600 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Quiz</p>
                      <p className="text-lg font-bold text-blue-600" style={{fontFamily: 'Poppins, sans-serif'}}>{course.quizScore}%</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-100">
                      <p className="text-xs text-slate-600 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Midterm</p>
                      <p className="text-lg font-bold text-purple-600" style={{fontFamily: 'Poppins, sans-serif'}}>{course.midtermScore}%</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                      <p className="text-xs text-slate-600 font-medium mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Project</p>
                      <p className="text-lg font-bold text-green-600" style={{fontFamily: 'Poppins, sans-serif'}}>{course.projectScore}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity View */}
      {viewType === "assignments" && (
        <div className="w-full">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
            <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
            Recent Activity
          </h3>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 mb-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{activity.icon}</div>
                    <div>
                      <p className="font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{activity.title}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>{activity.course}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500" style={{fontFamily: 'Poppins, sans-serif'}}>
                          {new Date(activity.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      activity.score >= 90 ? 'text-green-600' :
                      activity.score >= 80 ? 'text-blue-600' :
                      activity.score >= 70 ? 'text-yellow-600' : 'text-orange-600'
                    }`} style={{fontFamily: 'Poppins, sans-serif'}}>
                      {activity.score}%
                    </p>
                    <p className="text-xs text-slate-500 mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Completion Rate</p>
                  <p className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {Math.round((performanceMetrics.assignmentsCompleted / performanceMetrics.assignmentsTotal) * 100)}%
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600" style={{fontFamily: 'Poppins, sans-serif'}}>
                {performanceMetrics.assignmentsCompleted} out of {performanceMetrics.assignmentsTotal} assignments completed
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Average Score</p>
                  <p className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{performanceMetrics.averageScore}%</p>
                </div>
              </div>
              <p className="text-sm text-slate-600" style={{fontFamily: 'Poppins, sans-serif'}}>Across all assessments and courses</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Current GPA</p>
                  <p className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{performanceMetrics.currentGPA}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600" style={{fontFamily: 'Poppins, sans-serif'}}>Based on {courses.length} courses this semester</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProgressPage;