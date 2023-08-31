import React from 'react'
import MovesList from './MovesList'

const MovementList = ({ moves }) => {
    return (
        <main className='flex flex-wrap gap-2 mt-4'>
            {
                moves?.map((move) => <MovesList key={move.move.name} move={move} />)
            }
        </main>
    )
}

export default MovementList