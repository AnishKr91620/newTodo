import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo ,deleteTode} from '../features/Slicer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CompletedTodos = () => {
    const todosall = useSelector((state) => state.todo?.todos || []);

    // Filter completed todos
    const completedTodos = todosall.filter(todo => todo.completed);
    const dispatch = useDispatch();
    const handleCheckbox = (id) => {
        dispatch(toggleTodo(id));
    }
    const handleDelete = (id)=>{
        dispatch(deleteTode(id))
    }

    return (
        <div className="max-w-[60%] mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Completed To-Do List</h1>
            {completedTodos.length > 0 ? (
                <ul className="space-y-4 list-none">
                    {completedTodos.map((todo) => (
                        <div key={todo.id} className="flex items-center justify-between gap-4 bg-gray-100 p-4 rounded-lg shadow mb-2">
                            {/* Custom Circular Checkbox (Replacing Bullet Points) */}
                            <div
                                className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 cursor-pointer relative"
                                onClick={() => handleCheckbox(todo.id)}
                                onMouseEnter={(e) => e.currentTarget.classList.add("hover:ring-2", "hover:ring-blue-500")}
                                onMouseLeave={(e) => e.currentTarget.classList.remove("hover:ring-2", "hover:ring-blue-500")}
                            >
                                <div
                                    className={`cursor-pointer w-full h-full rounded-full transition-all duration-200 ${todo.completed ? 'bg-blue-500' : 'bg-white'}`}
                                />
                            </div>

                            <span className="flex items-center justify-between w-full text-black">
                                <span
                                    className="line-through flex-1 truncate text-ellipsis overflow-hidden whitespace-nowrap pr-4"
                                    title={todo.title} // Show full title on hover
                                >
                                    {todo.title}
                                    
                                </span>
                                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(todo.id)} className="cursor-pointer"/>

                            </span>

                        </div>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No completed todos!</p>
            )}
        </div>
    )
}

export default CompletedTodos;
