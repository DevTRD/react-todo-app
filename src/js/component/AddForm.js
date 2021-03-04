import React, { useState } from 'react'

import Button from './Button'

const AddForm = ({ show, onSubmit }) => {
    
    const [title, updateTitle] = useState('')

    const onTitleChange = (e) => {
        updateTitle(e.target.value)
    }
    
    return (
        <form className={`w-full h-80 absolute bottom-0 transform translate-y-2 bg-opacity-75 bg-gray-200 flex flex-col items-center ${show ? '' : 'hidden'}`} 
            
            onSubmit={(e) => {
                updateTitle('')
                onSubmit(e, title)
            }}>
            
            <legend className="w-full py-4 font-semibold uppercase text-center">Add task</legend>
            
            <input type="text" name="title" className="px-4 py-2 mb-4 rounded shadow text-sm" placeholder="Title" required onChange={onTitleChange} value={title} />

            <Button text='Add ToDo' color='gray' />
        </form>
    )
}

export default AddForm