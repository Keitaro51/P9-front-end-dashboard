import dumbbells from '../../assets/dumbbell.svg'
import swim from '../../assets/swim.svg'
import zen from '../../assets/zen.svg'
import cycle from '../../assets/cycle.svg'

import Icon from '../Icon/icon'

function Sidebar(){
    const icons = [dumbbells, swim, zen, cycle]

    return(
        <>
            <p>sidebar</p>
            {icons.map((icon, index)=>(
                <Icon key={index} svg={icon}/>
            ))}
            <p>Copiryght, SportSee 2020</p>
        </>
    )
}

export default Sidebar