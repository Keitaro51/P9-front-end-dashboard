import energy from '../../../assets/energy.svg'
import chicken from '../../../assets/chicken.svg'
import apple from '../../../assets/apple.svg'
import cheeseburger from '../../../assets/cheeseburger.svg'

import { translation } from '../../../utils/translation'


function Nutrients({data}){
    
    const icons = [
        {'name':'calorieCount','svg':energy, 'backgroundColor':"rgba(191,170,143,0.1)"},
        {'name':'proteinCount','svg':chicken, 'backgroundColor':"rgba(74,184,255,0.1)"},
        {'name':'carbohydrateCount','svg':apple, 'backgroundColor':"rgba(249,206,35,0.1)"},
        {'name':'lipidCount','svg':cheeseburger, 'backgroundColor':"rgba(253,81,129,0.1)"}
    ]

    return(
        <div className="icon">
            {icons.map((icon, index)=>
                <div key={index}>
                    <img src={icon.svg} alt=""/>
                    <p>{data[icon.name]}</p>
                    <h1>{translation.nutrient[icon.name]}</h1> 
                </div>
            )}
        </div>
    )
}

export default Nutrients