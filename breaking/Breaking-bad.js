import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Components/ui/Header'
import CharacterGrid from './Components/Character/CharacterGrid'
import Search from './Components/ui/Search'


const Breaking = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            )

            console.log(result.data) 

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [query])


    return (
        <div className='container'>

            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />

        </div>
    )
}

export default Breaking