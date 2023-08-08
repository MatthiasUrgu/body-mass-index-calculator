import s from "./App.module.scss";
import Header from "components/header/header";
import MenPictures from "components/MenPictures/MenPictures";
import ListParagraphLogo from "components/ListParagraphLogo/ListParagraphLogo";
import Paragraph from "components/Paragraph/Paragraph";
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
      <div className={`${s.container} ${s.desktop}`}>
        <Paragraph
          title="Limitations of BMI"
          content="Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider theur BMI outcomes, and in certain cases, the measurement may not be benefical to use."
        />
        <ParagraphCardList />
      </div>
    </section>
  );
}

export default App;
