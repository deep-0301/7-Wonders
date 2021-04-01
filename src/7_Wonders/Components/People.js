import React from 'react'

const People = ({ item }) => {
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
                            <strong>Name : </strong>{item.name}
                        </li>
                        <li>
                            <strong>Enrollment : </strong>{item.enrollment}
                        </li>
                        <li>
                            <strong>Birthday : </strong>{item.birthday}
                        </li>
                        <li>
                            <strong>Mobile : </strong>{item.mobile}
                        </li>
                        <li>
                            <strong>Email : </strong>{item.email}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default People;