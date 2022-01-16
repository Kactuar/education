import React, { useState, useEffect } from 'react'
import FilterList from './components/FilterList';

const collection = ['Барабан', 'Гитара', 'Скрипка'];


function App() {
  return (
    <div>
      <FilterList collection={collection}/>
    </div>
  );
}

export default App;
