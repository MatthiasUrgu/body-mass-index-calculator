import { useState } from 'react';
import s from './style.module.scss'

function CardCalculator({result,resultText}) {

    const [isHeight,setHeight] = useState(true)

    function toggleMetric(e){
        setHeight(e.target.value === 'on')
        
        console.log(isHeight);
    }



    return (
        <div className={s.bmiCalculator}>
                    <h1>Enter your details below</h1>
                    <div className={`${s.flexRadio} ${s.marginTop}`}>
                        <div className={s.metric}>
                            <input onChange={toggleMetric} type="radio" name="Metric" id="height" value="on" checked={isHeight}/>
                            
                            <label>Metric</label>
                        </div>
                        <div className={s.imperial}>
                            <input onChange={toggleMetric} type="radio" name="imperial" id="weight" value="off" checked={!isHeight}/>
                            <label>Imperial</label>
                        </div>
                    </div>

                    <div className={`${s.calculNumber} ${s.marginTop}`}>
                        <div className={s.heightNumber}>
                           <label className={s.labelHeight}>Height</label>
                            <input className={s.inputHeight} type="number" />
                            <span className={s.spanMetric}>
                                {isHeight ? 'M' : 'inch'}
                            </span>
                        </div>
                        <div className={`${s.weightNumber} ${s.marginTop}`}>
                            <label className={s.labelHeight}>Weight</label>
                            <input className={s.inputHeight}type="number" />
                            <span className={s.spanMetric}>
                                {isHeight ? 'Kg' : 'Ibs'}
                            </span>
                        </div>
                    </div>
                    <div className={`${s.resultNumber} ${s.marginTop}`}>
                        <h3>Your BMI is...</h3>
                        <span className={s.result}>{result}</span>
                        <p>Your BMi suggest you're a healthy weight. Yiour ideal weight is between  {result} {isHeight ? 'Kg' : 'Ibs'}.</p>

                    </div>
                </div>
    );
}

export default CardCalculator;