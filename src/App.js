import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContex';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <Header />
              <Search />
            </div>
          </section>
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-0 mx-auto">
              <List />
            </div>
          </section>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
