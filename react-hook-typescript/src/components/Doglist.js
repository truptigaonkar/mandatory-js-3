import React from 'react'
import {Link} from 'react-router-dom'

const Doglist = (props) => {
    const {dogs} = props
    return (
        <>
            <h4>Dog list</h4>
            <ul>
                {Object.keys(dogs).map((dog, index) => 
                    <li key={index}>
                        <Link to={`/dogs/${dog}`}>
                        {dog}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Doglist;
