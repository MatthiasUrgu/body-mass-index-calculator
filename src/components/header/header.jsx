import React from "react";
import s from "./style.module.scss";
import CardCalculator from "components/CardCalculator/cardCalculator";
import Logo from "assets/img/logo.png";

function Header() {
  /* use useState to radioButton to change in same times the taille:'CM' to 'Inch'  weight:Kg to Ib  */
  return (
    <div className={s.boxContainer}>
      <div className={s.logoImg}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={s.headerContainer}>
        <div className={s.textHeader}>
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While is not the sole determinant
            of a healthy weight, it offers a valuable starting point to evaluate
            your overall health and well-being.
          </p>
        </div>
        <CardCalculator result="23.4"
        resultText="85.2"/>
      </div>
      <div className={s.blueBox}></div>
    </div>
  );
}

export default Header;
