import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContex';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ receta }) => {

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { recetacntx, guardarReceta, guardarIdReceta } = useContext(ModalContext);

  const mostrarIng = inf => {
    let ing = [];
    for(let i=1; i<16;i++){
      if(inf[`strIngredient${i}`]) {
        ing.push(
        <li>{inf[`strIngredient${i}`]} {inf[`strMeasure${i}`]}</li>
        )
      }
    }
    return ing;
  }
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt={`${receta.strDrink} drink image`} className="object-cover object-center w-full h-full block" src={receta.strDrinkThumb} />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{receta.strDrink}</h2>
        <button type="button" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          onClick={() => {
            guardarIdReceta(receta.idDrink);
            handleOpen()
          }}>View Recipe</button>
        <Modal open={open}
          onClose={() => {
            guardarIdReceta(null);
            guardarReceta({});
            handleClose();
          }}>
          <div style={modalStyle} className={classes.paper}>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-1">{recetacntx.strDrink}</h1>
            <h2 className="tracking-widest text-base title-font font-medium text-gray-500">Instructions:</h2>
            <p className="leading-relaxed mb-1">{recetacntx.strInstructions}</p>
            <h2 className="tracking-widest mb-1 text-base title-font font-medium text-gray-500">Ingredients:</h2>
            <ul>
              {mostrarIng(recetacntx)}
            </ul>
            <img alt={`${receta.strDrink} drink image`} className="mt-2 object-cover object-center h-48 w-full block" src={receta.strDrinkThumb} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Recipe;