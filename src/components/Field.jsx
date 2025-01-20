import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../features/Slicer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Field = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => setIsOpen(!isOpen);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsOpen(false);
  };

  const handleAdd = () => {
    if (fieldValue !== '') {
      const todo = {
        title: fieldValue,
        id: Date.now(),
        completed: false,
        dueDate: date.toISOString().slice(0, 10), // Format the date for storage
      };
      dispatch(addList(todo));
      setFieldValue('');
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <input
        type="text"
        placeholder="Add a Title for To-Do"
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
        className="w-[40%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <div>
        <div className="relative">
          <div
            onClick={toggleCalendar}
            className="cursor-pointer w-[200px] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            {date.toLocaleDateString()} {/* Corrected display */}
          </div>
          {isOpen && (
            <div className="absolute top-[100%] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="z-50 text-gray-950 bg-transparent rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Field;
