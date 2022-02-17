import dumbbellsIcon from '../../assets/dumbbell.svg'
import swimIcon from '../../assets/swim.svg'
import zenIcon from '../../assets/zen.svg'
import cycleIcon from '../../assets/cycle.svg'

import NavButtons from '../Sidebar/NavButtons/navbuttons'

import colors from '../../style/variables'
import styled from 'styled-components'

const Section =  styled.section`
    background: ${colors.primary};
    height: calc(100vh - 91px);
    width: 117px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const StyledParagraph =  styled.p`
    color: ${colors.secondary};
    transform: rotate(-90deg);
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 128px;
`

function Sidebar(){
    
    const icons = [dumbbellsIcon, swimIcon, zenIcon, cycleIcon]
    
    return(
        <Section className="sidebar">
            <NavButtons svgCollection={icons}/>
            <StyledParagraph>Copyright, SportSee 2020</StyledParagraph>
        </Section>
    )
}

export default Sidebar