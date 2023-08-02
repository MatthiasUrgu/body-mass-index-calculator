import React from 'react';
import s from './App.module.scss'
import Header from "components/header/header"
import MenPictures from 'components/MenPictures/MenPictures';
import ListParagraphLogo from 'components/ListParagraphLogo/ListParagraphLogo';
import Paragraph from 'components/Paragraph/Paragraph';
import ParagraphCardList from 'components/ParagraphCardList/ParagraphCardList';

function App() {
  return (
    <section>
      <div className={s.container}>
        <Header />
        <MenPictures/>
      </div>
        <div className={s.noMargin}>
          <ListParagraphLogo/>
          </div>
        <div className={s.container}> 
          <Paragraph title="Limitations of BMI"
                     content="Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider theur BMI outcomes, and in certain cases, the measurement may not be benefical to use."/>
          <ParagraphCardList/>
        </div>
    </section>
  );
}

export default App;