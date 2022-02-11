import styled from 'styled-components'

import { translation } from '../../../utils/translation'

import energy from '../../../assets/energy.svg'
import chicken from '../../../assets/chicken.svg'
import apple from '../../../assets/apple.svg'
import cheeseburger from '../../../assets/cheeseburger.svg'

const Container =  styled.div`
    width: 258px;
`

const Card =  styled.figure`
padding: 32px;
margin-bottom: 39px;
display: flex;
background-color: #FBFBFB;
border-radius: 5px;
align-items: center;
    & p, h1{
        font-family: 'roboto', sans-serif;
        margin-left: 24px;
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

const ImageContainer =  styled.div`
    height:60px;
    width:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    ${({backgroundColor}) => `background: ${backgroundColor};`}
`

function Nutrients({data}){
    
    const icons = [
        {'name':'calorieCount','svg':energy, 'backgroundColor':"rgba(255,0,0,0.1)", 'unit':'kCal'},
        {'name':'proteinCount','svg':chicken, 'backgroundColor':"rgba(74,184,255,0.1)", 'unit':'g'},
        {'name':'carbohydrateCount','svg':apple, 'backgroundColor':"rgba(249,207,35,0.1)", 'unit':'g'},
        {'name':'lipidCount','svg':cheeseburger, 'backgroundColor':"rgba(253,81,129,0.1)", 'unit':'g'}
    ]
    
    return(
        <Container className="icon">
            {icons.map((icon, index)=>
                <Card key={index}>
                    <ImageContainer backgroundColor={icon.backgroundColor} ><img src={icon.svg} alt=""/></ImageContainer>
                    <figcaption>
                        <p >{data[icon.name]}{icon.unit}</p>
                        <h1>{translation.nutrient[icon.name]}</h1> 
                    </figcaption>
                </Card>
            )}
        </Container>
    )
}

export default Nutrients