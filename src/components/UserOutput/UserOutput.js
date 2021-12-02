import React, { useState } from 'react'
import './UserOutput.style.scss'

const UserOutput = () => {

    const [value, setValue] = useState('')

    return (
        <div className='useroutput-container'>
            <p>Processed Output</p>
            <textarea className='useroutput-textarea' value={value} onChange={e => setValue(e.target.value)}
            ></textarea>
        </div>
    )
}

export default UserOutput
