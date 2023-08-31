import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <main className='bg-black min-h-screen'>
      <h1 className='text-center text-4xl pt-10 text-red-800'>Page Not Found</h1>
      <div className='flex justify-center py-4 px-4 h-[400px]'>
        <img src="/img/404/error404.gif" alt="" />
      </div>
      <p className='text-red-500 font-bold text-center'>ERROR 404</p>
      <Link className='flex justify-center underline text-white ' to={"/"}>Ir a inicio</Link>
    </main>

  )
}

export default Page404