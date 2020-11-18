import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idreceta, guardarIdReceta] = useState(null);
  const [recetacntx, guardarReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if(!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const res = await Axios.get(url);
      guardarReceta(res.data.drinks[0]);
    }
    obtenerReceta();
  }, [idreceta])

  return (
    <ModalContext.Provider
      value={{
        recetacntx,
        guardarReceta,
        guardarIdReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;