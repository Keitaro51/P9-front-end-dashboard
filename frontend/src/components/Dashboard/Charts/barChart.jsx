import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getActivity } from '../../../services/getData'

const Container =  styled.div`
    position: relative;
    background-color: #FBFBFB;
    border-radius: 5px;
    @media (max-width: 1439px) {
        flex-basis: 100%;
    }
`

const Title =  styled.h1`
    font-weight: 500;
    font-size: 15px;
    position: absolute;
    top: 20px;
    left: 40px;
`
/**
 * Component for showing user activity, represented with bar chart
 * @component
 * 
 */
function BarChart(){
    
    const [userActivity, setUserActivity] = useState(null)

    useEffect(()=>{
        /**
         * fetch user info from USER_ACTIVITY and store it into component state
         * @async
         */
        const fetchUserActivity = async () => {
            const data = await getActivity()
            setUserActivity(data.sessions)
        }
        fetchUserActivity()
    },[])
    
    if(!userActivity){
        return(
            <div>LOADING ACTIVITY CHART</div>
        )
    }
    
    /**
     * Return french translation depending on unit for chart legend
     * @param {string} unit unitée de mesure 
     * @returns {HTMLElement} 
     */
    const renderLegendText = (label) => {
        return <span style={{color: '#74798C', fontWeight: '500', fontSize: '14px'}}> {label}</span>;
      };
   
    /**
     * Custom tooltip on chart mousehover
     * @param {{active:boolean, payload:array}} [] tooltip state
     * @returns {HTMLElement|null} 
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div>
              <p> {`${payload[0].value}kg`}</p>
              <p> {`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
        return null;
    }

    return(
        <Container className="barChart"> 
            <Title>Activité quotidienne</Title>
            <Chart width={835} 
                height={320} 
                data={userActivity} 
                margin={{
                top: 50,
                right: 30,
                left: 40,
                bottom: 0,
                }}
                barSize={7}
                barGap={8}
                >
                <Legend verticalAlign='top' 
                    align="right" 
                    iconType="circle" 
                    iconSize="8" 
                    formatter={renderLegendText} 
                    wrapperStyle={{top: "20px", right:"48px"}}/>
                
                <CartesianGrid strokeDasharray="2 2" 
                    vertical={false} />
                
                <XAxis dataKey="day"
                    axisLine={{stroke: '#DEDEDE', strokeWidth: 1}}
                    tick={{ fill: '#9B9EAC', fontSize: '14px', fontWeight: '500'  }}
                    tickFormatter={(label) => `${label.slice(8)}`}
                    tickLine={false}/ >
                
                <YAxis axisLine={false} 
                    orientation="right"
                    tick={{ fill: '#9B9EAC', fontSize: '14px', fontWeight: '500' }}
                    tickLine={false}/>
                
                <Tooltip cursor={{ fill: 'rgba(196, 196, 196, 0.5)'}} 
                    content={<CustomTooltip/>} 
                    wrapperStyle={{background: "#E60000", color: "white", lineHeight:"24px", padding:"17px"}}/>
                
                <Bar dataKey="kilogram" 
                    fill="#282D30" 
                    name="Poids (kg)" 
                    radius={[3, 3, 0, 0]}/>
                <Bar dataKey="calories" 
                    fill="#E60000" 
                    name="Calories brûlées (kCal)" 
                    radius={[3, 3, 0, 0]}/>
            </Chart>
        </Container>
    )
}

export default BarChart