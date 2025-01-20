import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../features/Slicer';

const Todos = () => {
    const todosall = useSelector((state) => state.todo?.todos || []);
    const alltodos = todosall.filter(todo => !todo.completed);
    const dispatch = useDispatch();
    const handleCheckbox = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <div className="max-w-[60%] mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
            {alltodos.length > 0 ? (
                <ul className="space-y-4 list-none">
                    {alltodos.map((alltodo) => (
                        <div key={alltodo.id} className="flex items-center justify-between gap-4 bg-gray-100 p-4 rounded-lg shadow mb-2">
                            {/* Custom Circular Checkbox (Replacing Bullet Points) */}
                            <div
                                className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 cursor-pointer relative"
                                onClick={() => handleCheckbox(alltodo.id)}
                                onMouseEnter={(e) => e.currentTarget.classList.add("hover:ring-2", "hover:ring-blue-500")}
                                onMouseLeave={(e) => e.currentTarget.classList.remove("hover:ring-2", "hover:ring-blue-500")}
                            >
                                <div
                                    className={`cursor-pointer w-full h-full rounded-full transition-all duration-200 ${alltodo.completed ? 'bg-blue-500' : 'bg-white'}`}
                                />
                            </div>

                            <span className="flex items-center justify-between w-full text-black">
                                <span
                                    className="flex-1 truncate text-ellipsis overflow-hidden whitespace-nowrap pr-4"
                                    title={alltodo.title} // Show full title on hover
                                >
                                    {alltodo.title}
                                </span>
                                <span className=" text-gray-500 text-sm whitespace-nowrap mr-5">dueDate: {alltodo.dueDate}</span>
                            </span>

                        </div>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No todos added yet!</p>
            )}
        </div>
    );
};

export default Todos;
