import { useEffect, useState } from 'react'
import { getAverageSession } from '../../../services/getData'

function LineChart({ id }){

    const [userAverageSession, setUserAverageSession] = useState(null)

    useEffect(()=>{
        const fetchUserAverageSession = async () => {
            const data = await getAverageSession(id)
            setUserAverageSession(data)
        }
        fetchUserAverageSession()
    },[id])
    
    //console.log(userAverageSession)

    if(!userAverageSession){
        return(
            <div>LOADING AVERAGE SESSION CHART</div>
        )
    }
    
    return(
        <div className="lineChart">LineChart HERE { id }/ {userAverageSession.data.userId}</div>
    )
}

export default LineChart