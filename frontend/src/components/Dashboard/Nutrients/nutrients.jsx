import propTypes from "prop-types"
import styled from 'styled-components'

import { translation } from '../../../utils/translation'

import energy from '../../../assets/energy.svg'
import chicken from '../../../assets/chicken.svg'
import apple from '../../../assets/apple.svg'
import cheeseburger from '../../../assets/cheeseburger.svg'

const Container =  styled.div`
    width: 258px;
    heigth: 125px;
`

const Card =  styled.figure`
padding: 32px;
margin-bottom: 39px;
display: flex;
background-color: #FBFBFB;
border-radius: 5px;
align-items: center;
    & p, h1{
        
        margin-left: 24px;
        color: #282D30;
    }
    & h1{
        font-size: 14px;
        font-weight: 500;
    }
    & p{
        font-size: 20px;
        font-weight: 700;
    }
`
const CardCaption = styled.figcaption`
    display: flex;
    height: 60px;
    flex-direction: column;
    justify-content: space-around;
`

const ImageContainer =  styled.div`
    height:60px;
    width:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    ${({backgroundColor}) => `background: ${backgroundColor};`}
`
/**
 * Component for showing nutrient detail
 * @component
 * @example
 * const data = {calorieCount: 2500, proteinCount: 90, carbohydrateCount: 150, lipidCount: 120}
 * < Nutrients data={data} />
 */
function Nutrients({data}){
    
    const iconCollection = [
        {'name':'calorieCount','svg':energy, 'backgroundColor':"rgba(255,0,0,0.1)", 'unit':'kCal'},
        {'name':'proteinCount','svg':chicken, 'backgroundColor':"rgba(74,184,255,0.1)", 'unit':'g'},
        {'name':'carbohydrateCount','svg':apple, 'backgroundColor':"rgba(249,207,35,0.1)", 'unit':'g'},
        {'name':'lipidCount','svg':cheeseburger, 'backgroundColor':"rgba(253,81,129,0.1)", 'unit':'g'}
    ]
    
    return(
        <Container className="nutrients">
            {iconCollection.map((icon, index)=>
                <Card key={index}>
                    <ImageContainer backgroundColor={icon.backgroundColor} ><img src={icon.svg} alt=""/></ImageContainer>
                    <CardCaption>
                        <p>{formatData(data[icon.name])}{icon.unit}</p>
                        <h1>{translation.nutrient[icon.name]}</h1> 
                    </CardCaption>
                </Card>
            )}
        </Container>
    )
}

/**
 * add a comma after thousand digit (ex: 2,500Kcal/j) - hypothesis : value >= 10000 Kcal/j are never reached
 * @param {number} data - nutrient value
 * @returns {(number|string)} original data or data with comma after thousand digit
 */
function formatData(data){
    if(data.toString().length > 3){
        const splitData = data.toString().split('')
        splitData.splice(1, 0, ",").join('')
        return splitData.join('')
    }   
    return data
}

Nutrients.propTypes = {
    data: propTypes.shape({
        calorieCount: propTypes.number,
        carbohydrateCount: propTypes.number,
        lipidCount: propTypes.number,
        proteinCount: propTypes.number
      })
}

Nutrients.defaultProps  = {
    data: propTypes.shape({
        calorieCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0,
        proteinCount: 0
      })
}

export default Nutrients