import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { LineChart as Chart, Line, XAxis, YAxis, Tooltip, Rectangle, ResponsiveContainer } from 'recharts';

import { getAverageSession } from '../../../services/getData'

const days = ["L", "M", "M", "J", "V", "S", "D"]

const Container =  styled.div`
    position: relative;
    background: #FF0000;
    border-radius: 5px;
    height: 263px;
    width: 258px;
`
const Title = styled.h1`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 15px;
    font-weight: 500;
    color: white;
`

const TooltipWrapperStyle = styled.div`
    font-size:8px; 
    font-weight: 500; 
    color: black; 
    background: white;
    width:40px;
    height:25px;
    display: flex;
    justify-content: center;
    align-items: center
`

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <TooltipWrapperStyle>
                <p> {`${payload[0].value}min`}</p>
            </TooltipWrapperStyle>
            );
    }
    return null;
}

/**
 * Custom area cursor shape on right side of active dot
 * @param {*} props activeDot props
 * @returns {HTMLElement} area
 */
    const CustomCursor = (props) => {
    const { points, width } = props;
    const { x } = points[0];
    return (
        <Rectangle
        fill="black"
        opacity="0.1"
        x={ x }
        width={ width +30 }
        height= {263}
        />
    );
};

/**
 * Component for showing user average session time on week, represented with line chart
 * @component
 * 
 */
function LineChart(){
    
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
        <Container className="lineChart">
            <Title>Durée moyenne des <br/> sessions</Title>
            <Chart
                width={258} 
                height={263}
                data={userAverageSession.sessions}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>

                <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    stroke="#FFF" 
                    tickLine={false} 
                    tickFormatter={(_, index) => days[index]}/>
                <YAxis 
                    type="number" 
                    domain={['dataMin - 10', 'dataMax + 10']} 
                    hide={true}/>
                <Tooltip 
                    cursor={<CustomCursor />} 
                    content={<CustomTooltip/>}/>
                <Line 
                    type="natural" 
                    dataKey="sessionLength" 
                    strokeWidth={2} 
                    stroke="#FFF" 
                    dot={false} 
                    activeDot={{ r: 4, stroke: 'rgba(255, 255, 255, 0.5)', strokeWidth: 5 }} />
            </Chart>
        </Container>
    )
}

export default LineChart