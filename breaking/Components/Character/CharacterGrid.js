import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoding }) => {
    return (

        isLoding ? (
            <h1>Loding....</h1>
        ) :
            (
                <section className='cards'>
                    {items.map((item) => (
                        <CharacterItem key={item.char_id} item={item}></CharacterItem>
                    ))}

                </section>
            )

    )
}

export default CharacterGrid
