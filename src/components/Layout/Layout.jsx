import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
   <>
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <main className="flex-1  bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
   </>
  )
}

export default Layout