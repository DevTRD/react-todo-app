import React from 'react'

const Task = ({ title, done, onCrossClick, onTaskClick }) => {
    return(
        <div className={`w-full bg-white rounded shadow my-2 px-4 py-4 flex items-center duration-500 select-none overflow-hidden`} onClick={onTaskClick}>
            <span className={`${done ? 'text-green-500' : 'text-gray-300'} cursor-pointer`}>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
            </span>
            <section className="w-full ml-4">
                <h2 className="text-sm">{title}</h2>
            </section>
            <span className="text-red-500 cursor-pointer" onClick={onCrossClick}>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
            </span>
        </div>
    )
}

Task.defaultProps = {
    onCrossClick: () => {},
    onTaskClick: () => {}
}

export default Task