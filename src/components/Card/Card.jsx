import style from "./Card.module.css"
import { Link } from 'react-router-dom';


export default function Card({id,name,status,gender,species,origin,image,onClose}) {
   return (
      <div className={style.container}>
      <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
      
      
      <Link to={`/Detail/${id}`} >
      <h2>{name}</h2>
      </Link>




         <img src={image} alt='' />
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         
      </div>
   );
}

