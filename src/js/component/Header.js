import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title, showAddForm, hideAddForm }) => {
    
    const [buttonClick, setButtonClick] = useState(true)
    const [buttonText, setButtonText] = useState('Add')
    
    const buttonClickControl = () => {
        
        buttonClick ? showAddForm() : hideAddForm()

        setButtonClick(!buttonClick)
        
        buttonText == 'Add' ? setButtonText('Back') : setButtonText('Add')
    }
    
    return (
        <header className="w-full flex items-center justify-between px-8 py-4">
            <h1 className="uppercase font-semibold">{ title }</h1>
            <Button text={buttonText} color={buttonText == 'Add' ? 'gray' : 'red'} onClick={buttonClickControl} />
        </header>
    )

}

Header.defaultProps = {
    title: 'Todo'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header