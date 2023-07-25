import React from 'react';
import s from './App.module.scss'
import Header from "./components/header/header"

function App() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  );
}

export default App;