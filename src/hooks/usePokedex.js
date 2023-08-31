import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllPokemons, getAllTypes, getPokemonsByType } from "../services/pokemons"

const usePokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [types, setTypes] = useState([])


    const { name } = useSelector(store => store.trainer)

    const handleChange = (setState) => (e) => {
        setState(e.target.value)

    }

    const pokemonByName = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))
    useEffect(() => {
        if (!pokemonType) {
            getAllPokemons()
                .then((data) => setPokemons(data))
                .catch((err) => console.log(err));
        }
    }, [pokemonType])
    useEffect(() => {
        if (pokemonType) {
            getPokemonsByType(pokemonType).then((data) => setPokemons(data))
                .catch((err) => console.log(err))
        }
    }, [pokemonType])

    useEffect(()=>{
        getAllTypes().then((types) => setTypes(types));        
    }, [])
    return {
        name,
        pokemonName,
        setPokemonName,
        pokemonType,
        setPokemonType,
        handleChange,
        pokemonByName,
        types
    }
}

export default usePokedex