import React from 'react'

const Doglist = (props) => {
    const {dogs} = props
    return (
        <div>
            <h4>Dog list</h4>
            {dogs.map((dog,index) =>(
                <ul key={index}>
                    <li>{dog}</li>
                </ul>
            ))}
        </div>
    )
}

export default Doglist;
