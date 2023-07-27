import { useState } from 'react';
import s from './style.module.scss'

function CardCalculator({result,resultText}) {

    const [isMetric,setMetric] = useState("metric")
    const [Height,setHeight] = useState(0)
    const [Weight,setWeight] = useState(0)


    function toggleMetric(e){
        setMetric(!isMetric)
       
        console.log("isMetric" +isMetric);
        
    }



    function handleHeight(e){
        setHeight(e.target.value)
        
    }
    function handleWeight(e){
        setWeight(e.target.value)
    }

    function calculateBMI() {
        if (isMetric === "metric") {
          return (Weight / (Height * Height)).toFixed(1);
        } else{
          return ((Weight / (Height * Height)) * 703).toFixed(1);
        }
      }
 /*    function calculateBMI(){
        if(isMetric === "metric"){
                let IMC = Weight / (Height*Height)
                return IMC.toFixed(1);

        }
    }
    else if(isMetric === "imperial"){
        (Height && Weight){
            let BMI = Weight / (Height*Height) * 703
            return BMI.toFixed(1);

    }
} */ 

        
    

  
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
                                {isMetric ? 'M' : 'Ibs'}
                            </span>
                        </div>
                        <div className={`${s.weightNumber} ${s.marginTop}`}>
                            <label className={s.labelHeight}>Weight</label>

                            <input className={s.inputHeight}type="number" value={Weight} onChange={handleWeight}/>
                            <span className={s.spanMetric}>
                                {isMetric ? 'Kg' : 'Inch'}
                            </span>
                        </div>
                    </div>
                    <div className={`${s.resultNumber} ${s.marginTop}`}>
                        <h3>Your BMI is...</h3>
                        <span className={s.result}>
                            {Height && Weight ? `${calculateBMI()}` : ""}
                            
                            </span>
                        <p>Your BMi suggest you're a healthy weight. Yiour ideal weight is between  {Height && Weight ? `${calculateBMI()}` : ""} {isMetric ? 'Kg' : 'Ibs'}.</p>
                        {/* -----------------Ajoute dialogue si le poids est > pour obèse et < pour trop maigre-------------------- */}
                    </div>
                </div>
    );
}

export default CardCalculator;