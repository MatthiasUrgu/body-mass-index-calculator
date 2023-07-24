import React from 'react';
import s from './style.module.scss'
function header() {

    /* use useState to radioButton to change in same times the taille:'CM' to 'Inch'  weight:Kg to Ib  */
    return (
        <div className={s.boxContainer}>
            <div className={s.blueBox}></div>
            <div className={s.textHeader}>
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <div className={s.bmiCalculator}>
                <h1>Enter your details below</h1>
                <div className="flexRadio">
                    <input type="radio" name="Metric" id="cm"  />
                    <label>Metric</label>
                    <input type="radio" name="imperial" id="inch" />
                    <label>Imperial</label>
                </div>
            </div>
        </div>
    );
}

export default header;