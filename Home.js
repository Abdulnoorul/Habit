import React from 'react'
import Habits from './Habits'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar name="List of Habits"/>
      <Habits/>
    </>
  )
}

export default Home