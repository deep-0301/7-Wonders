import React from 'react'
import People from './People'

const PeopleGrid = ({ items, isLoding }) => {
    return (

        isLoding ? (
            <h1>Loding....</h1>
        ) :
            (
                <section className='cards'>
                    {items.map((item) => (
                        <People key={item.char_id} item={item}></People>
                    ))}

                </section>
            )

    )
}

export default PeopleGrid
