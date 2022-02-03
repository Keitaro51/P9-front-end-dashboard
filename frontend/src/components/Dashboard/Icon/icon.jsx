
import React from 'react'

function Icon({svg}){

    return(
        <React.Fragment>
            {svg.map((icon, index)=>
                <div key={index}>
                    <img src={icon} alt=""/>
                </div>
            )}
        </React.Fragment>
    )
}

export default Icon