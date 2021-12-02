import React, { useState } from 'react'
import './Input.scss'

const Input = () => {
    
    const [file, setFile] = useState('')
    
    const fileChangeHandler = event => {
        let file = event.target.files[0]
        console.log('file: ', file)
    }

    return (
        <div className='input-container'>
            <p>Select Video File</p>
            <input type='file' value={file} onChange={fileChangeHandler} />
        </div>
    )
}

export default Input
