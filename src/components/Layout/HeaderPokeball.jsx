import React from 'react'
import { logout } from '../../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <section>
      <header>
        <div className='h-14 bg-red-700 relative ' >
          <div className='absolute left-1 top-6 sm:top-1 w-[180px] sm:w-[300px] '>
            <Link to={"/pokedex/"} >
              <img src="/img/imgprincipal.png" alt="Header" />
            </Link>
          </div>
        </div>

        <div className='h-12 bg-black dark:bg-white relative' >
          <h5 className=' font-serif text-sm text-white absolute right-[1.9rem] 
          top-[29px] -mx-1 dark:text-black font-bold '>
            Log Out
          </h5>
          <button onClick={handleLogout} className="h-14 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-6 border-[5px] border-black
            after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-600 after:rounded-full after:absolute after:left-1/2
            after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black transition-colors
            hover:bg-red-600 cursor-pointer">
            <i className='absolute z-10  bx bxs-door-open text-white text-2xl left-[10px] bottom-[6px]'></i>
          </button>
        </div>
      </header>
      {children}
    </section>
  )
}

export default HeaderPokeball