import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AppLayout = () => {
  return (
    <div className='bg-gray-950 text-white min-h-screen '>
        <div className='container px-6 py-4 mx-auto'>
            <Header/>
      <main>
        <Outlet></Outlet>
      </main>
      </div>
    </div>
  )
}

export default AppLayout
