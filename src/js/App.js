import React, {useState, useEffect} from 'react'

import Header from './component/Header'
import Tasks from './component/Tasks'
import AddForm from './component/AddForm'

const App = () => {
    
    const [taskList, updateTaskList] = useState([])
    const [taskFetched, updateTaskFetched] = useState(false)

    const [showAddForm, updateShowAddForm] = useState(false)

    useEffect(() => {
        
        if (!taskFetched) {
            updateTaskFetched(true)
            
            let todos = localStorage.getItem('todos')
            
            if (!todos) todos = '[]'
            
            updateTaskList(JSON.parse(todos))
        
        }
        
        localStorage.setItem('todos', JSON.stringify(taskList))
        

    }, [taskList])

    const onDelete = (e, id) => {
        e.stopPropagation()
        
        updateTaskList(taskList.filter(task => id !== task.id))

    }

    const onTaskClick = (id) => {
        updateTaskList(taskList.map(task => {
            if (id == task.id) {
                task.done = !task.done
            }
            return task
        }))
    }

    const onAddFormSubmit = (e, title) => {
        e.preventDefault()
        if (title) {
            const newTask = {
                id: Math.random() * Date.now(),
                title: title,
                done: false
            }

            e.target.reset()
            
            updateTaskList([...taskList, newTask])

        }
    }

    
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-full h-full sm:w-96 sm:h-96 shadow-lg border rounded flex flex-col relative">
                <Header showAddForm={() => updateShowAddForm(true)} hideAddForm={() => updateShowAddForm(false)} />
                <Tasks taskList={taskList} onCrossClick={onDelete} onTaskClick={onTaskClick} />
                <AddForm show={showAddForm} onSubmit={onAddFormSubmit} />
            </div>
        </div>
    )
}

export default App