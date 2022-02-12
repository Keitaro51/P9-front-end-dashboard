import { useEffect, useState } from 'react'

import { LineChart as Chart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    
    if(!userAverageSession){
        return(
            <div>LOADING AVERAGE SESSION CHART</div>
        )
    }
    
    return(
        <div className="lineChart">
            <Chart
                width={263} 
                height={271}
                data={userAverageSession.data.sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <XAxis dataKey="day" />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
            </Chart>
        </div>
    )
}

export default LineChart