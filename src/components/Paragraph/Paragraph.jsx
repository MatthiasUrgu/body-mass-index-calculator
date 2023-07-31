import s from './style.module.scss'

function Paragraph({title,content}) {
    return (
        <section className={s.containerParagraph}>
            
            <h1>{title}</h1>
            <p>{content}</p>
        </section>
    );
}

export default Paragraph;