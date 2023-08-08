import s from "./App.module.scss";
import Header from "components/header/header";
import MenPictures from "components/MenPictures/MenPictures";
import ListParagraphLogo from "components/ListParagraphLogo/ListParagraphLogo";
import ParagraphCardList from "components/ParagraphCardList/ParagraphCardList";



function App() {


  
  return (
    <section>
      <div className={s.container}>
        <Header
          title="Body Mass Index Calculator"
          content="Better understand your weight in relation to your height using our
        body mass index (BM) calculator. While is not the sole determinant
        of a healthy weight, it offers a valuable starting point to evaluate
        your overall health and well-being."
        />
        <MenPictures />
      </div>
      <div className={s.noMargin}>
        <ListParagraphLogo />
      </div>
      <div className={s.container}>
        
        <ParagraphCardList />
      </div>
    </section>
  );
}

export default App;
