import s from './style.module.scss'
import ParagraphLogo from 'components/ParagraphLogo/ParagraphLogo';
import logo1 from "assets/img/logo.png"
function ListParagraphLogo(props) {
    return (
        <section className={s.ListContainer}>
            <ParagraphLogo logo={logo1}
                        title="Healthy eating"
                        content="abc"/>
            <ParagraphLogo logo={logo1}
                        title="Regular exercice"
                        content="abc"/>
            <ParagraphLogo logo={logo1}
                        title="Adequate sleep"
                        content="abc"/>
        </section>
    );
}

export default ListParagraphLogo;