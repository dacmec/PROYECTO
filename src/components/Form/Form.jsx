import style from './Form.module.css'
import { useState } from 'react';
import validation from '../Validation/Validation';
const Form = ({ Login }) => {



    const[errors, setErrors] = useState({})
    const[userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value

    }))
}

const handleSubmit = (event) => {
    event.preventDefault()
    
    Login(userData); 
}

    return(
        <form on submit={handleSubmit} className={style.contenedor}>

            <label htmlFor="email"  >Email: </label>
            <input type="text" name='email' value={userData.email} 
            onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <p></p>
            
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" value={userData.password} 
            onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <p></p>
            
            
            <button>Submit</button>
        </form>

    )
}

export default Form;