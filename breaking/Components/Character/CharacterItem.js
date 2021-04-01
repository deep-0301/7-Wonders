import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt={item.name}></img>
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor name:</strong>{item.portrayed}
                        </li>
                        <li>
                            <strong>Nick name:</strong>{item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong>{item.birthday}
                        </li>
                        <li>
                            <strong>Status  :</strong>{item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterItem;