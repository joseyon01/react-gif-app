import React, { Fragment, useState } from 'react';

const AddCategory = ({setCategories}) => {

    //State que almacena los datos del Input
    const [inputValue, setInputValue] = useState('');

    //Funcion que detecta los cambios en el input y lo almacena en el state
    const handleInputChange = (e) => {
        
        setInputValue(e.target.value);
    }

    //Funcion que capta el dato del submit y alamcena en el state principal
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(inputValue.trim().length > 3){
            setCategories((cat)=> [inputValue, ...cat]);
            setInputValue('');
        }    
    }


    return (  
        <Fragment>
            <h3>Agregar Categoria</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control"  
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </form>




            
        </Fragment>
    );
}
 
export default AddCategory;