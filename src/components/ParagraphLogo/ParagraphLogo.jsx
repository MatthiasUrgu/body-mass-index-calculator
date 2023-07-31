import s from './style.module.scss'

function ParagraphLogo({logo,content,title}) {
    return (
        <section className={s.containerParagraph}>
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
        <p>{content}</p>
    </section>

    );
}

export default ParagraphLogo;