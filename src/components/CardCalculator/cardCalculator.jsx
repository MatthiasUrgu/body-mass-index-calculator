import { useState } from 'react';
import s from './style.module.scss'

function CardCalculator({result,resultText}) {

    const [isMetric,setMetric] = useState("metric")
    const [Height,setHeight] = useState(0)
    const [Weight,setWeight] = useState(0)


    function toggleMetric(e){
        setMetric(!isMetric)
       console.log(isMetric);
    }
    function handleHeight(e){
        setHeight(e.target.value)
        console.log(setHeight);
    }
    function handleWeight(e){
        setWeight(e.target.value)
    }

    function calculateBMI(){
        if(isMetric === "metric"){
            if(Height && Weight){
                var IMC = Weight / (Height*Height)
                return IMC.toFixed(1)

        }
    }
        else if(isMetric === "imperial"){
            if(Height && Weight){
                var BMI = (Weight / (Height*Height)) * 703
                return BMI.toFixed(1)
            }
        }
    }

  
    return (
        <div className={s.bmiCalculator}>
                    <h1>Enter your details below</h1>
                    <div className={`${s.flexRadio} ${s.marginTop}`}>
                        <div className={s.metric}>
                            <input onChange={toggleMetric} type="radio" name="Metric"  value="metric" checked={isMetric} />
                            
                            <label>Metric</label>
                        </div>
                        <div className={s.imperial}>
                            <input onChange={toggleMetric} type="radio" name="imperial" value="imperial" checked={!isMetric}/>
                            <label>Imperial</label>
                        </div>
                    </div>

                    <div className={`${s.calculNumber} ${s.marginTop}`}>
                        <div className={s.heightNumber}>
                           <label className={s.labelHeight}>Height</label>

                            <input className={s.inputHeight} type="number" value={Height} onChange={handleHeight}/>
                            <span className={s.spanMetric}>
                                {isMetric ? 'M' : 'inch'}
                            </span>
                        </div>
                        <div className={`${s.weightNumber} ${s.marginTop}`}>
                            <label className={s.labelHeight}>Weight</label>

                            <input className={s.inputHeight}type="number" value={Weight} onChange={handleWeight}/>
                            <span className={s.spanMetric}>
                                {isMetric ? 'Kg' : 'Ibs'}
                            </span>
                        </div>
                    </div>
                    <div className={`${s.resultNumber} ${s.marginTop}`}>
                        <h3>Your BMI is...</h3>
                        <span className={s.result}>
                            {Height && Weight ? `${calculateBMI()}` : "Padawan tu es Zeubi"}
                            
                            </span>
                        <p>Your BMi suggest you're a healthy weight. Yiour ideal weight is between  {result} {isMetric ? 'Kg' : 'Ibs'}.</p>

                    </div>
                </div>
    );
}

export default CardCalculator;