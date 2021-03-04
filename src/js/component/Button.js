import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    
    const onMouseDown = (e) => {
        e.target.classList.remove(`bg-${color}-500`)
        e.target.classList.add(`bg-${color}-400`)
    }
    
    const onMouseUp = (e) => {
        e.target.classList.remove(`bg-${color}-400`)
        e.target.classList.add(`bg-${color}-500`)
    }
    
    return (
        <button className={`bg-${color}-500 text-sm rounded px-4 py-2 shadow font-semibold text-white focus:outline-none duration-100`} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>{text}</button>
    )

}

Button.defaultProps = {
    text: 'Button',
    color: 'blue',
    click: () => {}
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default Button