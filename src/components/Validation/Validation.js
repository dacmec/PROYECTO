
 
    const validation = (userData) => {
        const errors ={};

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
            errors.email = 'El nombre de usuario es invalido'

        }
        if(!userData.email){
            errors.email = 'Debe ingresar un email valido';
        }
        if(userData.email.length > 35){;
        }
        if(!/.*\d+.*/.test(userData.password)){
            errors.password = "Dale tarado la contrasena esta mal y mi teclado no tiene e;e"
        }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La contrasena debe tener 6 o 10 caracteres'
    }
        return errors;
    }


export default validation;