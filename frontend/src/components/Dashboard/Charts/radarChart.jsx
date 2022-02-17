import { useEffect, useState } from 'react'
import { Radar, RadarChart as Chart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import { getPerformance } from '../../../services/getData'

import { translation } from '../../../utils/translation';

function RadarChart(){

    const [userPerformance, setUserPerformance] = useState(null)
    
    useEffect(()=>{
        const fetchUserPerformances = async () => {
            const result = await getPerformance()
            transformData(result)
            setUserPerformance(result.data)
        }
        
        const transformData = (result) => {
            result.data.forEach((data, index)=>{
                data.kind = translation.kind[result.kind[index+1]]
            })
        }
               
        fetchUserPerformances()
    },[])
         
    if(!userPerformance){
        return(
            <div>LOADING PREFORMANCES CHART</div>
        )
    }

    return(
        <div className="radarChart" style={{background: "#282D30"}}>
            <Chart background= "#FF0101" startAngle="-150" endAngle="210" outerRadius={90} width={258} height={263} data={userPerformance} fill="#FFF">
                <PolarGrid />
                <PolarAngleAxis dataKey="kind"  />
                <Radar dataKey="value"  fill="#FF0101" fillOpacity={0.7} />
            </Chart>
        </div>
    )
}

export default RadarChart