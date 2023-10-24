import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import Page404 from './pages/Page404'
import PrivateRoutes from './components/aut/PrivateRoutes'

function App() {

  return (    
    <main className='dark:bg-black transition-colors duration-500 h-[100%] '>
      <section className='max-w-[1200px] mx-auto'>
      <Routes>
      <Route path='/' element={<Home/>} />

      <Route element={<PrivateRoutes/>}>
      <Route path='/pokedex' element={<Pokedex/>} />
      <Route path='/pokedex/:pokemonid' element={<PokemonDetail/>} />
      </Route>

      
      <Route path='*' element={<Page404/>} />
    </Routes>
      </section>
    </main>
  )
}

export default App
