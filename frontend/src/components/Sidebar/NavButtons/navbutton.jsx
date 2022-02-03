function NavButton({svgCollection}){
    
    return(
        <nav className="sidebar-nav-container">
            {svgCollection.map((icon, index)=>
                <div key={index} className="sidebar-nav-button">
                    <img src={icon} alt=""/>
                </div>
            )}
        </nav>
    )
}

export default NavButton