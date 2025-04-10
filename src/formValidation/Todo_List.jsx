import React, { useState } from 'react';

const Todo_List = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editedItem, setEditedItem] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim() === '') {
            setMessage('Add a task please ')
        }
        else {
            setItems([...items, { text: newItem, completed: false, id: Math.random() }]);
            setNewItem('');
            setMessage('');
        }
    };

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleCompleted = (id) => {
        setItems(items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
    };

    const handleEdit = (id) => {
        const itemToEdit = items.find((item) => item.id === id);
        setEditedItem(itemToEdit);
        setNewItem(itemToEdit.text);
    };

    const handleSaveEdit = (id) => {
        setItems(items.map((item) => item.id === id ? { ...item, text: newItem } : item));
        setEditedItem(null); // Reset editedItem after saving
        setNewItem(''); // Clear input field
    };

   
   

    return (
        <div className='flex justify-center items-center h-screen bg-yellow-100'>
            <div className=' mx-auto p-4 px-4 py-5 bg-amber-900 text-[20px] text-align-center w-[50%] h-[50%] rounded-lg shadow-lg'>
                <h1 className='text-[60px] text-blue-950 text-center'>To-Do-List-App</h1>
                <form onSubmit={handleSubmit} className='flex gap-2 justify-center text-align-center mt-20'>
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Enter a task"
                        className=' bg-amber-50 rounded-lg h-10'
                    />
                    <button
                    className='bg-blue-400 h-9 w-30 rounded-lg'
                     type="submit">{editedItem ? 'Save Edited' : 'Add'}</button>
                     {message && <p style={{color: 'red'}}>{message}</p>}
                </form>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleCompleted(item.id)}
                            />
                            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                                {item.text}
                            </span>
                            <button 
                             className='bg-red-400 h-9 w-30 rounded-lg'
                            onClick={() => handleDelete(item.id)}>Delete</button>
                            {editedItem && editedItem.id === item.id && (
                                <button
                                 className='bg-green-400 h-9 w-30 rounded-lg'
                                 onClick={() => handleSaveEdit(item.id)}>Save Edit</button>
                            )}
                            {!editedItem && (
                                <button
                                 className='bg-gray-400 h-9 w-30 rounded-lg'
                                 onClick={() => handleEdit(item.id)}>Edit</button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo_List;
