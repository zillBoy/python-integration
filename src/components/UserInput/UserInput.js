import React from 'react'
import './UserInput.style.scss'
import Input from '../Input/Input'
import Placeholder from '../Placeholder/Placeholder'

const UserInput = () => {
    return (
        <div className='userinput-container'>
            <Input />
            <Placeholder />
        </div>
    )
}

export default UserInput
