import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecetasContext } from '../context/RecetasContext';

const List = () => {
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="flex flex-wrap -m-4">
      {recetas.map(item => (
          <Recipe key={item.idDrink} receta={item} />
        ))}
    </div>
  );
}

export default List;