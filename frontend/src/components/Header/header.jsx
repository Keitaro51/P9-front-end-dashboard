import logo from '../../assets/logo.svg'
import colors from '../../style/variables'
import styled from 'styled-components'

const StyledHeader =  styled.header`
    width: 100vw;
    background: ${colors.primary};
    color: ${colors.secondary};
    height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1439px) {
        height: 60px;
    }
`

const Logo = styled.img`
    width: 178px;
    margin: 18px 0 12px 28px;
    @media (max-width: 1439px) {
        width: 130px;
    }
`

const NavList = styled.ul`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1439px) {
        font-size: 18px;
    }
`

const NavBar = styled.nav`
    flex-grow: 1;
`

/**
 * Component for showing header and nav menu
 * @component
 * 
 */
function Header(){
    return(
        <StyledHeader>
            <Logo src={logo} alt="logo de sportsee"/>
            <NavBar>
                <NavList>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </NavList>
            </NavBar>
        </StyledHeader>
    )
}

export default Header