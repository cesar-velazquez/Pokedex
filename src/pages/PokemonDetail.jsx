import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../services/pokemons'
import StatBarList from '../components/PokemonDetail/StatBarList'
import MovementList from '../components/PokemonDetail/MovementList'
import { bgStyleBackground, bgStylePokemonType } from '../shared/Pokemon'

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null)
  const { pokemonid } = useParams();

  useEffect(() => {
    getPokemonById(pokemonid)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <main className={` flex justify-center items-center ${bgStyleBackground[pokemonData?.types[0]]} `}>
      <article className='w-[min(100%,_700px)] p-4'>
        <div className='bg-black/30 rounded-md p-4'>
          <header>
            <div className='flex justify-center h-[300px] '>
              {
                pokemonData?.image === null ?
                  <img src={pokemonData?.imageRespaldo} alt="Pokemon" />
                  :
                  <img className='w-[100px] h-[100px] m-auto ' src={pokemonData?.image} alt="Pokemon" />
              }
            </div>
            <h1 className='font-bold text-center pb-4 text-2xl'>#{pokemonData?.id} </h1>

            <div className='my-4'>
              <div className='w-[100%] bg-black h-[1px] relative  '>
                <div className={`absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 border-none rounded-2xl 
                shadow-md shadow-black ${bgStyleBackground[pokemonData?.types[0]]}  h-[50px]
                px-4 font-bold text-2xl flex  `}>
                  <h1 className='flex items-center' >{pokemonData?.name}</h1>
                </div>
              </div>

              <section className='flex gap-4 mt-8 justify-center ' >
                <p className='font-semibold'><span className='font-bold text-center'>Weight:</span> {pokemonData?.weight}</p>
                <p>|</p>
                <p className='font-semibold'><span className='font-bold text-center'>Height:</span> {pokemonData?.height}</p>
              </section>

              <section className='bg-black/20 mt-8 grid gap-4   '>
                <div className='text-center font-bold ' >
                  <h3 >Type:</h3>
                  <div className='flex gap-4 ' >
                    {/* <p className='font-bold flex flex-col  ' > {pokemonData?.types} </p>                   */}
                    {
                      pokemonData?.types.map((pokemonD, index) =>
                        <li key={index} className={`font-bold flex justify-center mx-auto border 
                        px-4 my-3 py-[1px] ${bgStylePokemonType[pokemonData?.types[0]]} 
                        gap-4 `} >{pokemonD}</li>)
                    }
                  </div>
                </div>

                <div className='text-center font-bold ' >
                  <h3 >Abilities:</h3>
                  <div className='flex gap-4 ' >                  
                    {
                      pokemonData?.abilities.map((pokemonD, index) =>
                        <li key={index} className='font-bold flex justify-center mx-auto border px-4 my-3 py-[1px] 
                        gap-4 ' >{pokemonD.ability.name}</li>)
                    }
                  </div>
                </div>
              </section>

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