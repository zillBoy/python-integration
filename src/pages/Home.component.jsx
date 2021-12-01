import React from 'react'
import '../styles/home.style.scss'
import Header from '../components/Header/Header'
import UserInput from '../components/UserInput/UserInput'
import UserOutput from '../components/UserOutput/UserOutput'

const Home = () => {
    return (
        <div className='home-container'>
            <Header page='home' />
            <div className='content-container'>
                <UserInput />
                <UserOutput />
            </div>
            
        </div>
    )
}

export default Home
