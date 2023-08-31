import React from 'react'

const StatList = ({ stats }) => {
    // console.log("first", stats)
    return (
        <ul className='grid gap-4 grid-cols-3 text-xs p-2  '>
            {stats?.map((stat) => (
            <li key={stat.name}>
                <h4 className=' capitalize line-clamp-1 ' >{stat.name}</h4>
                <h5 className=' font-bold ' >{stat.value}</h5>
            </li>
            ))}
        </ul>
    );
};
export default StatList