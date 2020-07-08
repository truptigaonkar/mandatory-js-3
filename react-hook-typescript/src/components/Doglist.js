import React from 'react'
import {Link} from 'react-router-dom'

const Doglist = (props) => {
    const {dogs} = props
    return (
        <div>
            <h4>Dog list</h4>
            {dogs.map((dog,index) =>(
                <ul key={index}>
                    <li><Link to={`/dogs/${dog}`}>{dog}</Link></li>
                </ul>
            ))}
        </div>
    )
}

export default Doglist;
