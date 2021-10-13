import React, {Fragment, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Header from './components/Header';


const InitialCategories = ['One Punch']


function App() {

  const [categories, setCategories] = useState(InitialCategories);

  /* const handleAdd = ()=> {
    setCategories([
      ...categories,
      'jose'
    ]);
  } */

    /* console.log('la lista de categorias es', categories); */

  return (
    <Fragment>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="contenedor">
        <AddCategory 
      
        setCategories = {setCategories}/>       
        <hr/>
        
        {/* <button onClick={cambiarCategoria}> Agregar</button> */}
        <ol>
          {/* <li key={iter}>
                {iter}
            </li>  Va  dentro del map*/}
          {categories.map( category => (
            
            <GifGrid
              key={category} 
              category= {category}
            />
          ))}
        </ol>
      </div>
        
    </Fragment>
  );
}

export default App;
