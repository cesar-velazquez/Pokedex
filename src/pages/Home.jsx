import React from 'react'
import FooterPokeball from '../components/Layout/FooterPokeball'
import { useDispatch } from 'react-redux'
import { loginTrainer } from '../store/slices/trainer.slice';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        const nametrainer = e.target.nametrainer.value;
        dispatch(loginTrainer(nametrainer));
        navigate("/pokedex")

    }

    return (
        <main className='min-h-screen grid grid-rows-[1fr_auto] '>
            <section className='flex'>
                <article className=' p-4  m-auto '>
                    <div className='py-4 mb-4'>
                        <img src="/img/imgprincipal.png" alt="Pokedex" />
                    </div>
                    <h2 className='text-center text-red-500 font-extrabold' >!Hi trainer!</h2>
                    <p className='font-medium text-xs text-center mb-2'>To start give me your name</p>
                    <form
                    className='text-center'
                        onSubmit={handleSumbit} action="">
                        <input
                            autoComplete='off'
                            placeholder='your name... '
                            id='nametrainer'
                            type="text"
                            required
                            className='border-b-[1px]  '
                        />
                        <button className='bg-red-600 text-white px-4  ' >Start!</button>
                    </form>
                </article>
            </section>
            <FooterPokeball />
        </main>
    )
}

export default Home