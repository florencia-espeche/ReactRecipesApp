import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

  const [recetas, guardarRecetas] = useState([]);

  const [busqueda, buscarRecetas] = useState({
    ingredient: '',
    category: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ingredient, category } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const res = await Axios.get(url);
        // console.log(res.data.drinks);
        guardarRecetas(res.data.drinks);
      }
      obtenerReceta();
    }
  }, [busqueda])
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas, 
        guardarConsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
}

export default RecetasProvider;