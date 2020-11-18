import React from 'react';

const Header = () => {
  return ( 
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
        Drink Recipes </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Recipies finder by categories and ingredients</p>
   </div>
   );
}
 
export default Header;