import { useEffect, useState } from 'react'

import { LineChart as Chart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { getAverageSession } from '../../../services/getData'

/**
 * Component for showing user average session time on week, represented with line chart
 * @component
 * 
 */
function LineChart(){
    
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    
    const [userAverageSession, setUserAverageSession] = useState(null)

    useEffect(()=>{
        /**
         * fetch user info from USER_AVERAGE_SESSIONS and store it into component state
         * @async
         */
        const fetchUserAverageSession = async () => {
            const data = await getAverageSession()
            setUserAverageSession(data)
        }
        fetchUserAverageSession()
    },[])
    
    if(!userAverageSession){
        return(
            <div>LOADING AVERAGE SESSION CHART</div>
        )
    }
    
    return(
        <div className="lineChart" style={{background: "#FF0000"}}>
            <h1>Durée moyenne des sessions</h1>
            <Chart
                width={258} 
                height={263}
                data={userAverageSession.sessions}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="day" axisLine={false} stroke="#FFF" tickLine={false} color="#FFF" tickFormatter={(_, index) => days[index]}/>
                <Tooltip />
                <Line type="natural" dataKey="sessionLength" strokeWidth={2} stroke="#FFF" dot={false} activeDot={{ r: 8 }} />
            </Chart>
        </div>
    )
}

export default LineChart