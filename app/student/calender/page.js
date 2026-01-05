"use client";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdAssignment, MdQuiz } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterType, setFilterType] = useState("all");

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Data Structures Assignment",
      type: "assignment",
      date: new Date(2024, 11, 25),
      course: "BTech CSE - Section A - Sem 3",
      description: "Submit implementation of Binary Search Tree",
      priority: "high"
    },
    {
      id: 2,
      title: "DBMS Quiz",
      type: "quiz",
      date: new Date(2024, 11, 27),
      course: "BTech CSE - Section A - Sem 3",
      description: "Topics: Normalization and SQL Queries",
      priority: "medium"
    },
    {
      id: 3,
      title: "Operating Systems Lab",
      type: "assignment",
      date: new Date(2024, 11, 28),
      course: "BTech CSE - Section B - Sem 3",
      description: "Process Scheduling Algorithm Implementation",
      priority: "medium"
    },
    {
      id: 4,
      title: "Web Development Project",
      type: "assignment",
      date: new Date(2024, 11, 30),
      course: "BTech CSE - Section A - Sem 5",
      description: "Final project submission",
      priority: "high"
    },
    {
      id: 5,
      title: "Computer Networks Quiz",
      type: "quiz",
      date: new Date(2025, 0, 2),
      course: "BTech CSE - Section A - Sem 5",
      description: "Topics: TCP/IP and Routing",
      priority: "low"
    },
    {
      id: 6,
      title: "Machine Learning Assignment",
      type: "assignment",
      date: new Date(2025, 0, 5),
      course: "BTech CSE - Section A - Sem 5",
      description: "Build a classification model",
      priority: "high"
    },
    {
      id: 7,
      title: "Software Engineering Quiz",
      type: "quiz",
      date: new Date(2025, 0, 8),
      course: "BTech CSE - Section A - Sem 3",
      description: "SDLC Models and Agile",
      priority: "medium"
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(event => 
      event.date.toDateString() === date.toDateString() &&
      (filterType === "all" || event.type === filterType)
    );
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter(event => event.date >= today && (filterType === "all" || event.type === filterType))
      .sort((a, b) => a.date - b.date)
      .slice(0, 5);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const hasEvents = (date) => {
    if (!date) return false;
    return events.some(event => 
      event.date.toDateString() === date.toDateString() &&
      (filterType === "all" || event.type === filterType)
    );
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "high": return "bg-red-100 text-red-700 border-red-300";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "low": return "bg-green-100 text-green-700 border-green-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getTypeColor = (type) => {
    return type === "assignment" 
      ? "bg-blue-500" 
      : "bg-purple-500";
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysUntil = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 0) return "Overdue";
    return `${diffDays} days`;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Academic Calendar</h1>
          <p className="text-gray-600">Track your assignments, quizzes, and important deadlines</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filterType === "all"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilterType("assignment")}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              filterType === "assignment"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <MdAssignment size={18} />
            Assignments
          </button>
          <button
            onClick={() => setFilterType("quiz")}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              filterType === "quiz"
                ? "bg-purple-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <MdQuiz size={18} />
            Quizzes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <MdNavigateBefore size={24} />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <MdNavigateNext size={24} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-center font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                
                {getDaysInMonth(currentDate).map((date, index) => {
                  const dayEvents = date ? getEventsForDate(date) : [];
                  const isSelected = selectedDate && date && 
                    selectedDate.toDateString() === date.toDateString();
                  
                  return (
                    <div
                      key={index}
                      onClick={() => date && setSelectedDate(date)}
                      className={`min-h-[80px] p-2 rounded-lg border-2 transition-all cursor-pointer ${
                        !date 
                          ? "bg-gray-50 border-transparent cursor-default" 
                          : isSelected
                          ? "bg-blue-50 border-blue-500"
                          : isToday(date)
                          ? "bg-blue-100 border-blue-300"
                          : hasEvents(date)
                          ? "bg-gray-50 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                          : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {date && (
                        <>
                          <div className={`text-sm font-semibold mb-1 ${
                            isToday(date) ? "text-blue-600" : "text-gray-700"
                          }`}>
                            {date.getDate()}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map(event => (
                              <div
                                key={event.id}
                                className={`text-xs ${getTypeColor(event.type)} text-white px-1.5 py-0.5 rounded truncate`}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-gray-500 font-medium">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                Upcoming Events
              </h3>
              
              <div className="space-y-3">
                {getUpcomingEvents().length > 0 ? (
                  getUpcomingEvents().map(event => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${getPriorityColor(event.priority)}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {event.type === "assignment" ? (
                            <MdAssignment size={20} />
                          ) : (
                            <MdQuiz size={20} />
                          )}
                          <span className="font-semibold text-sm">{event.title}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <FaClock size={12} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <IoBookOutline size={12} />
                        <span>{event.course}</span>
                      </div>
                      
                      <p className="text-xs mb-2">{event.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          getDaysUntil(event.date) === "Overdue" 
                            ? "bg-red-200 text-red-800"
                            : getDaysUntil(event.date) === "Today"
                            ? "bg-orange-200 text-orange-800"
                            : "bg-blue-200 text-blue-800"
                        }`}>
                          {getDaysUntil(event.date)}
                        </span>
                        <span className="text-xs font-medium capitalize">
                          {event.priority} Priority
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FaCalendarAlt size={48} className="mx-auto mb-3 opacity-30" />
                    <p>No upcoming events</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Date Events */}
        {selectedDate && getEventsForDate(selectedDate).length > 0 && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Events on {formatDate(selectedDate)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getEventsForDate(selectedDate).map(event => (
                <div
                  key={event.id}
                  className={`p-4 rounded-xl border-2 ${getPriorityColor(event.priority)}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {event.type === "assignment" ? (
                      <MdAssignment size={24} />
                    ) : (
                      <MdQuiz size={24} />
                    )}
                    <h4 className="font-bold">{event.title}</h4>
                  </div>
                  <p className="text-sm mb-2 flex items-center gap-2">
                    <IoBookOutline size={14} />
                    {event.course}
                  </p>
                  <p className="text-sm mb-2">{event.description}</p>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-white">
                    {event.priority.toUpperCase()} PRIORITY
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}