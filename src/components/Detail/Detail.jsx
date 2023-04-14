import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'd8b8f9ab13a7.b6e596d9296804dc665f';



const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
           if (data.name) { 
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);




    return(
        <div>
            <img src={character?.image} alt={character?.name}/>

            <h2>{character?.name}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.origin?.name}</h2> 

        </div>
    )
}

export default Detail;
