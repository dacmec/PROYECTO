import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'd8b8f9ab13a7.b6e596d9296804dc665f';

const email = 'dacmec@gmail.com';
const password = 'yabadaba1';



function App () {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

const login = (userData) => {
   if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
   }

}

useEffect(() => {
   !access && navigate('./');
   
}, [access])

   const onSearch = (id) => {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

      const onClose = (id) => {
         const charactersFiltered = characters.filter(character => 
            character.id !== id)
         setCharacters(charactersFiltered)

      }

      
      
      
      
      
      return (
      <div className='App' >

         {
            location.pathname !== '/' 
            ?<Nav onSearch={onSearch} />
            :null

            
             
         }
         
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/Home' element={<Cards characters={characters} 
            onClose={onClose} /> }/>
            <Route path='/About' element={<About />} />
            <Route path='/Detail/:id' element={<Detail />} />
            


         </Routes>
   
         
         
      </div>
   );
}

export default App;
