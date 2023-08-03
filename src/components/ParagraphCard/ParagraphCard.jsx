import s from "./style.module.scss";

function ParagraphCard({ content,logo, title }) {
  return (
    <section className={s.containerParagraphCard}>
      <div className={s.cardFlex}>
        <img src={logo} alt="logo"/>
        <h1>{title}</h1>
      </div>
      <p className={s.cardParagraph}> {content}</p>
    </section>
  );
}

export default ParagraphCard;

