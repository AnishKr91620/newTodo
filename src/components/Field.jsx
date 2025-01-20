import React from 'react'
import { useState } from 'react'
import { useDispatch, } from 'react-redux';
import { addList } from '../features/Slicer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const Field = () => {

    const [fieldValue,setFieldValue] = useState('');
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false); // Control visibility of calendar

    const toggleCalendar = () => setIsOpen(!isOpen);
  
    const handleDateChange = (newDate) => {
      setDate(newDate);
      setIsOpen(false); // Close the calendar after selecting a date
    };    

    const handleAdd = ()=>{
      if(fieldValue != ''){
        const todo = {
          title: fieldValue,
          id: Date.now(),
          completed:false,
          dueDate: date,
        }
        dispatch(addList(todo))
        setFieldValue('');
      }
      else{

      }
    }

  return (
    <div className={"flex items-center justify-center gap-4 p-4"}>
      <input type="text" placeholder='Add a Title for To-Do'
      value={fieldValue} onChange={(e) => setFieldValue(e.target.value)}
      className={"w-[40%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}
      />
    <div>
    <div className="relative">
      {/* Div mimicking the date input */}
      <div
        onClick={toggleCalendar}
        className="cursor-pointer w-[200px] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        {date}
      </div>

      {/* Conditionally render the calendar if it's open */}
      {isOpen && (
        <div className="absolute top-[100%] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <Calendar
            onChange={handleDateChange}
            className="z-50 text-gray-950  bg-transparent rounded-lg"
            tileClassName="shadow-text" 
            value={new Date(date)}
            
          />
        </div>
      )}
    </div>
    </div>


      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default Field
