import React, {  useState, useEffect } from 'react';
import data from './API/Gec'
import Header from './Components/Header'
import Search from './Components/Search'
// import PeopleGrid from './Components/PeopleGrid';


const Wonders = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    // fetchItems()
    async function fetchData() {
        const res = await fetch(data);
        res.json()
            .then(setItems(data))
            .catch(setIsLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='container'>
                <Header />
                <Search isLoading={isLoading} items={items} />
                {/* <PeopleGrid isLoading={isLoading} items={items} /> */}
            </div>
        </>
    );
}

export default Wonders;
