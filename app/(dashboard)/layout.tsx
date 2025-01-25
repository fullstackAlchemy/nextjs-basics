import React from 'react'

const Layout = ({ children} : { children: React.ReactNode }) => {
  return (
    <div>
        <h1 className='text-2xl text-red-600'>DASHBOARD</h1>
        {children}
    </div>
  )
}

export default Layout