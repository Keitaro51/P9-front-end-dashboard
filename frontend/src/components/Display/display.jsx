import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

import Icon from '../Icon/icon'

import Charts from '../Charts/charts'


function Display(){
    const icons = [energy, chicken, apple, cheeseburger]
    return(
        <main>
            <h1>Bonjour Thomas</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <Charts />
            {icons.map((icon, index)=>(
                <Icon key={index} svg={icon}/>
            ))}
        </main>
    )
}

export default Display