import { useEffect, useState } from 'react'
import { getPerformance } from '../../../services/getAPI'

function RadarChart({ id }){

    const [userPerformance, setUserPerformance] = useState(null)
    
    useEffect(()=>{
        const fetchUserPerformances = async () => {
            const data = await getPerformance(id)
            setUserPerformance(data)
        }
        fetchUserPerformances()
    },[id])
    
        
    if(!userPerformance){
        return(
            <div>LOADING PREFORMANCES CHART</div>
        )
    }

    console.log(userPerformance)

    return(
        <div>RadarChart HERE { id } / {userPerformance.data.userId}</div>
    )
}

export default RadarChart