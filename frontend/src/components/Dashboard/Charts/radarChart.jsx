import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Radar, RadarChart as Chart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';

import { getPerformance } from '../../../services/getData'

import { translation } from '../../../utils/translation';

const Container =  styled.div`
    background: #282D30;
    border-radius: 5px;
    width: 258px;
    height: 263px;
    align-self: end;
`

/**
 * Chart component for main content, dynamicaly filled with user performance, represented with radar chart
 * @component
 * 
 */
function RadarChart(){
    
    const [userPerformance, setUserPerformance] = useState(null)
    
    useEffect(()=>{
        /**
         * fetch user info from USER_PERFORMANCE and store it into component state
         * @async
         */
        const fetchUserPerformances = async () => {
            const result = await getPerformance()
            transformData(result)
            setUserPerformance(result.data)
        }
        
        /**
         * Retranscript data_kind numeric codes with corresponding kind label, then translate them in french
         * @param {object} result fetched raw data
         */
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
        <Container className="radarChart">
            <ResponsiveContainer 
                width='100%' 
                height='100%'>
                <Chart 
                    data={userPerformance}
                    background="#FF0101" 
                    outerRadius={75}
                    width={258} 
                    height={263} 
                    fill="#FFF" >
                    <PolarRadiusAxis 
                        tickCount={6} 
                        axisLine={false} 
                        tick={false} />
                    <PolarGrid />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tick={{fontSize:"12", fontWeight:"500"}}/>
                    <Radar 
                        dataKey="value" 
                        fill="#FF0101" 
                        fillOpacity={0.7} />
                </Chart>
            </ResponsiveContainer>
        </Container>
    )
}

export default RadarChart