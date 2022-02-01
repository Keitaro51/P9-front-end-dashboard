import logo from '../../assets/logo.svg'

function Header(){
    return(
        <header>
            <p>header</p>
            <img src={logo} alt="logo de sportsee"/>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header