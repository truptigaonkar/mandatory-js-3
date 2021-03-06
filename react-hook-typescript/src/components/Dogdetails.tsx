import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Dogdetails = () => {
    const [dog, setDog] = useState('')
    const [subdog, setSubdog] = useState('')
    const { id } = useParams();
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${id}/images/random`)
            .then(res => {
                console.log(res.data.message)
                setDog(res.data.message)
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, [id]);

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${id}/list`)
            .then(res => {
                console.log(res.data.message)
                setSubdog(res.data.message)
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, [id]);

    const handleRefresh = () =>{
        axios.get(`https://dog.ceo/api/breed/${id}/images/random`)
            .then(res => {
                console.log(res.data.message)
                setDog(res.data.message)
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }

    return (
        <div>
            {load && <div>loading.....</div>}
            <p>Dog details :  <b>{id}</b></p> 
            {error && <div>Something went wrong - <b>{error}</b></div>}
            <p>SubDogs: <span>{subdog}</span></p>
            <p>{<img src={dog} alt="dog"/>}</p>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default Dogdetails;
