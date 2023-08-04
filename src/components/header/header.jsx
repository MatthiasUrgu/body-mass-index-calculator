
import s from "./style.module.scss";
import CardCalculator from "components/CardCalculator/cardCalculator";
import Logo from "assets/img/logo.png";

function Header({title,content}) {
  /* use useState to radioButton to change in same times the taille:'CM' to 'Inch'  weight:Kg to Ib  */
  return (
    <section className={s.boxContainer}>
      <div className={s.logoImg}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={s.headerContainer}>
        <div className={s.textHeader}>
          <h1>{title}</h1>
          <p>
            {content}
          </p>
        </div>
        <CardCalculator/>
      </div>
      <div className={s.blueBox}></div>
    </section>
  );
}

export default Header;
