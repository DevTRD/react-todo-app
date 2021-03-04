import React from 'react'

import Task from './Task'

const Tasks = ({ taskList , onCrossClick, onTaskClick}) => {
    return (
        <section id="Tasks" className="w-full h-full bg-gray-200 px-8 py-6 relative overflow-x-hidden overflow-y-auto">
            {taskList.length > 0 ? taskList.map(task => {
                return <Task key={task.id} title={task.title} done={task.done} onCrossClick={(e) => onCrossClick(e, task.id)} onTaskClick={() => onTaskClick(task.id)} />
            }) : 'No task added'}
        </section>
    )
}

export default Tasks