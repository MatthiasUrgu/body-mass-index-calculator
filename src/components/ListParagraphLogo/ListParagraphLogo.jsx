import s from './style.module.scss'
import ParagraphLogo from 'components/ParagraphLogo/ParagraphLogo';
import Food from "assets/img/FoodLogo.png"
import Sport from "assets/img/SportLogo.png"
import Sleep from "assets/img/SleepLogo.png"
function ListParagraphLogo(props) {
    return (
        <section className={s.ListContainer}>
            <ParagraphLogo logo={Food}
                        title="Healthy eating"
                        content="Healthy eating promotes weight control, disease prevention,better digestion,immunity ,mental clarity, and mood."/>
            <ParagraphLogo logo={Sport}
                        title="Regular exercice"
                        content="Exercise improves fitness,aids,weight control,elevates mood,and reduces disease risk, fostering wellness and longevity."/>
            <ParagraphLogo logo={Sleep}
                        title="Adequate sleep"
                        content="Sleep enhances mental clarity,emotional stability,and physical wellness,promoting overall restoration and rejuvenation"/>
        </section>
    );
}

export default ListParagraphLogo;