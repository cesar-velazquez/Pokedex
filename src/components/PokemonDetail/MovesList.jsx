import React from 'react'

const MovesList = ({ move }) => {
    return (
        <section className=' bg-black text-white text-[15px] rounded-2xl p-2'>
            <article>
                <p>{move.move.name}</p>
            </article>
        </section>
    )
}

export default MovesList