import s from "./style.module.scss";

function ParagraphLogo({ logo, content, title }) {
  return (
    <section className={s.containerParagraphLogo}>
      <img src={logo} alt="logo" />
      <div className={s.ParagraphFlex}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default ParagraphLogo;
