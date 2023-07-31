import React from 'react';
import s from './App.module.scss'
import Header from "components/header/header"
import MenPictures from 'components/MenPictures/MenPictures';
import ListParagraphLogo from 'components/ListParagraphLogo/ListParagraphLogo';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <MenPictures/>
      <ListParagraphLogo/>
    </div>
  );
}

export default App;