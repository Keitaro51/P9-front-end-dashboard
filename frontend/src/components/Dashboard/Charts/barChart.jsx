import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getActivity } from '../../../services/getData'

const Title =  styled.h1`
    font-weight: 500;
    font-size: 15px;
    padding:10px;
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
    const renderLegendText = (unit) => {
        if(unit === "kilogram"){
            return <span> Poids (kg)</span>;
        }
        return <span> Calories brûlées (kCal)</span>;
      };

    const tooltipStyle = {background: "#E60000", color: "white", lineHeight:"24px", padding:"17px"}
    
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
        //TODO ResponsiveContainer
        <div className="barChart"> 
            <Title>Activité quotidienne</Title>
            <Chart width={835} 
                height={290} 
                data={userActivity} 
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
                barSize={7}
                >
                <Legend verticalAlign='top' align="right" iconType="circle" iconSize="8" formatter={renderLegendText} wrapperStyle={{top: "-16px", right:"48px"}}/>
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis axisLine={{stroke: '#DEDEDE', strokeWidth: 1}} dataKey="day" tick={{ fill: '#9B9EAC' }} tickFormatter={(label) => `${label.slice(8)}`} tickLine={false}/ >
                <YAxis tick={{ fill: '#9B9EAC' }} orientation="right" axisLine={false} tickLine={false}/>
                <Tooltip cursor={{ fill: 'rgba(196, 196, 196, 0.5)'}} content={<CustomTooltip/>} wrapperStyle={tooltipStyle}/>
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
            </Chart>
        </div>
    )
}

export default BarChart