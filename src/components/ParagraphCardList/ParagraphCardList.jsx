import s from "./style.module.scss";
import ParagraphCard from "components/ParagraphCard/ParagraphCard";
import Paragraph from "components/Paragraph/Paragraph";
import VectorLeft from "assets/img/VectorLeft.png"

import Gender from "assets/img/genders.png";
import Age from "assets/img/candy.png";
import Muscle from "assets/img/muscles.png";
import Pregnancy from "assets/img/babys.png";
import Race from "assets/img/human.png";

function ParagraphCardList() {
  return (
    <section className={s.cardContainer}>
      <div className={s.widthParapgraph}>
        <Paragraph
            title="Limitations of BMI"
            content="Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider theur BMI outcomes, and in certain cases, the measurement may not be benefical to use."
          />
      </div>
      <ParagraphCard
        logo={Gender}
        title="Gender"
        content="The development and body fat composition of gitls and boys vary withage.Consequently, a child's age and gender are considered when evaluring their BMI."
      />
      
      <div className={s.marginImg}><img className={s.imgVector}src={VectorLeft} alt="VectorLeft"  /></div>


      <ParagraphCard
        logo={Age}
        title="Age"
        content="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
      />
      <ParagraphCard
        logo={Muscle}
        title="Muscle"
        content="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
      />
      <ParagraphCard
        logo={Pregnancy}
        title="Pregnancy"
        content="Expectant mothers experience weight gain due to their feowunf bany. Maintaining a healthy pre-pregnancy BMI is advisable ro minimise health risks for both mother and child."
      />
      <ParagraphCard
        logo={Race}
        title="Race"
        content="Certain health concerns mau affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
      />
    </section>
  );
}

export default ParagraphCardList;
