import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Doglist from './Doglist'

const Home = () => {
    const [dogs, setDogs] = useState([])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios
            .get(`https://dog.ceo/api/breeds/list`)
            .then((res) => {
                setDogs(res.data.message);
                console.log(res.data.message);
                setLoad(true);
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, []);

    return (
        <>
            {!load && <div>loading.....</div>}
            <p style={{color:'red'}}>{error && <div>LIST: Something went wrong - <b>{error}</b></div>}</p>
            <Doglist dogs={dogs}/>
        </>
    )
}

export default Home;
