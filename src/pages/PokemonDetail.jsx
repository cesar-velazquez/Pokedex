import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../services/pokemons'
import StatBarList from '../components/PokemonDetail/StatBarList'
import MovementList from '../components/PokemonDetail/MovementList'
import { bgStyleBackground } from '../shared/Pokemon'

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null)  
  const { pokemonid } = useParams();

  useEffect(() => {
    getPokemonById(pokemonid)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <main className={`flex justify-center items-center ${bgStyleBackground[pokemonData?.types[0]]} `}>      
      <article className='w-[min(100%,_700px)] p-4'>
      <div className='bg-black/30 rounded-md p-4'>
      <h1 className='font-bold text-center pb-4 text-2xl'>{pokemonData?.name} #{pokemonData?.id} </h1>
        <header>
          <div className='flex justify-center h-[300px] '>          
            {
              pokemonData?.image === null ?              
                <img src={pokemonData?.imageRespaldo} alt="Pokemon" />
                :
                <img src={pokemonData?.image} alt="Pokemon" />
            }
          </div>
        </header>        
        <section className='text-left text-2xl font-bold'>
          {/* <span>#{pokemonData?.id}</span> */}
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </div>

        <section className='bg-gray-200 rounded-2xl my-4 p-4 w-[min(100%,_700px)] '>

          <div className='relative'>
            <h2 className='font-bold text-xl relative'>Movements</h2>
            <div className='bg-gray-500  h-[1px] w-[50%]  absolute left-[20%] top-4 pl-4 ml-[4rem] sm:ml-[1%] sm:w-[70%] '></div>
          </div>
          <MovementList moves={pokemonData?.moves} />
        </section>
      </article>


    </main>
  )
}

export default PokemonDetail