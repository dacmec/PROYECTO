import style from "./SearchBar.module.css"
import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
      
      

   }




   return (
      <div className={style.bar}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('') }} className={style.searchButton}>Agregar</button>
      </div>
   );
}
