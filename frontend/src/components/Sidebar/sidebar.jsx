import dumbbells from '../../assets/dumbbell.svg'
import swim from '../../assets/swim.svg'
import zen from '../../assets/zen.svg'
import cycle from '../../assets/cycle.svg'

import NavButton from '../Sidebar/NavButtons/navbutton'

function Sidebar(){
    
    const icons = [dumbbells, swim, zen, cycle]
    
    return(
        <section className="sidebar">
            <p>sidebar</p>
            
            <NavButton svgCollection={icons}/>
            
            <p>Copyright, SportSee 2020</p>
        </section>
    )
}

export default Sidebar