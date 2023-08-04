import men from 'assets/img/jeune-homme.png'
import s from './style.module.scss'
import Paragraph from 'components/Paragraph/Paragraph';

function MenPictures() {
    return (
        <section className={s.picture}>
            <div className={s.men}> 
                <div  className={s.backgroundMen}></div>
                <img src={men} alt="men"/>
            </div>
            <div className={s.flexParagraph}>
                <Paragraph title="What your BMI result means"
                           content="A BMI range of 18.5 to 24.9 is considered a 'healthy weight'.Maintaining a healthy weight may lower chances of experiencing healt issues later on,such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegeteables.Additonally,strive for regylar physical activity,ideally about 30 minutes daily for five days a week."/>
            </div>
        </section>
    );
}

export default MenPictures;