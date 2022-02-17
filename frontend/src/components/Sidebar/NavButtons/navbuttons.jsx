import propTypes from "prop-types"
import styled from 'styled-components'

const StyledButton =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 64px;
    width: 64px;
    border-radius: 6px; 
    margin-bottom: 20px;
    &:first-child {
        margin-top:256px;
    }
`

function NavButtons({svgCollection}){
    
    return(
        <nav>
            {svgCollection.map((icon, index)=>
                <StyledButton key={index}>
                    <img src={icon} alt="" height="32px"/>
                </StyledButton>
            )}
        </nav>
    )
}

NavButtons.propTypes = {
    svgCollection: propTypes.arrayOf(propTypes.string)
}

export default NavButtons