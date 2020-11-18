import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Search = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  const [busqueda, guardarBusqueda] = useState({
    ingredient: '',
    category: ''
  });

  const obtenerDatosReceta = e => {
    e.preventDefault();

    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form onSubmit={e => {
      e.preventDefault();
      buscarRecetas(busqueda);
      guardarConsultar(true);
    }}>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        <input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Ingredient" name="ingredient" type="text" onChange={obtenerDatosReceta} />
        <select className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="category" onChange={obtenerDatosReceta}>
          <option value="">Select Category</option>
          {categorias.map((item, index) => <option key={index} value={item.strCategory}>{item.strCategory}</option>)}
        </select>
        <input type="submit" value="Search" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
      </div>
    </form>
  );
}

export default Search;