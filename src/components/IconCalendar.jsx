import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import { FaCalendarAlt } from 'react-icons/fa'; // Import an icon for the calendar

const IconCalendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Close calendar after selecting a date
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Calendar Icon */}
      <button
        onClick={toggleCalendar}
        className="p-2 text-blue-500 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FaCalendarAlt size={24} />
      </button>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="absolute top-12 left-0 z-10 bg-white border border-gray-300 rounded-lg shadow-md">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default IconCalendar;
