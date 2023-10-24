import { current } from '@reduxjs/toolkit';
import { paginateData } from '../Utils/pagination';
import PokemonList from '../components/pokedex/PokemonList'
import usePokedex from '../hooks/usePokedex'
import { useEffect, useState } from 'react';
import Pagination from '../components/pokedex/Pagination';

const Pokedex = () => {
  const [isdarkmode, setIsdarkmode] = useState(localStorage.getItem('theme') === 'dark')
  const [currentPage, setCurrentPage] = useState(1)

  const {
    handleChange,
    name,
    pokemonByName,
    pokemonName,
    pokemonType,
    setPokemonName,
    setPokemonType,
    types
  } = usePokedex();

  // const info = paginateData(pokemonByName, currentPage);

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  )

  const handleChangeMode = () => {
    setIsdarkmode(!isdarkmode)
  }

  useEffect(() => {
    isdarkmode
      ? (document.documentElement.classList.add('dark'), localStorage.setItem('theme', 'dark'))
      : (document.documentElement.classList.remove('dark'), localStorage.setItem('theme', 'light'))
  }, [isdarkmode])

  return (
    <main className='dark:text-white transition-colors duration-1000 py-8 '>
      <section className=''>
        <p className='text-center bg-black dark:bg-white  sm:text-3xl text-white dark:text-black font-bold '> Welcome
          <span className='font-bold text-red-600 dark:text-black  '> {name}</span> </p>
        {
          isdarkmode ?
            <i onClick={handleChangeMode} className=' w-[100px] my-5 mx-auto bx bxs-sun text-yellow-400 bg-black border-[1px] rounded-full p-1 cursor-pointer dark:transition-colors duration-1000 dark:duration-1000 flex justify-center '></i>
            : <i onClick={handleChangeMode} className='w-[100px] my-5 mx-auto bx bxs-moon text-black bg-gray-400 rounded-full p-1 m-2 cursor-pointer dark:transition-colors duration-1000 dark:duration-1000 flex justify-center '></i>
        }

        <form
          className='flex flex-col gap-4'
          action="">
          <div>
            <input
              className='bg-gray-400/40 text-center flex m-auto mt-1 rounded-lg font-bold'
              onChange={handleChange(setPokemonName)}
              type="text"
              placeholder='Search ...'
              value={pokemonName} />
          </div>

          <select
            className='flex m-auto text-center font-bold dark:bg-black dark:border-2 border-2 '
            value={pokemonType}
            onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {
              types.map((type) => <option
                key={type.name}
                value={type.name}
                className='capitalize'>{type.name}</option>)
            }
          </select>
        </form>
      </section>
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <PokemonList pokemons={itemsInCurrentPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </main>
  )
}

export default Pokedex