import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getUser } from '../../services/getData'

import LineChart from '../Dashboard/Charts/lineChart'
import BarChart from '../Dashboard/Charts/barChart'
import RadarChart from '../Dashboard/Charts/radarChart'
import RadialChart from './Charts/radialChart'
import Nutrients from './Nutrients/nutrients'

const DashboardContainer =  styled.section`
    padding: 68px 90px 88px 109px;
    height: 777px;
    width: 1122px;
`

const Title =  styled.p`
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 41px;
`

const Name =  styled.span`
    color: red;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 77px;
`

const DataContainer = styled.div`
    display: grid;
    height: 613px;
    gap: 0px 30px; 
    grid-template-rows: 124px 39px 124px 39px 12.4px 111.6px 39px 124px;
    grid-template-columns: 258px 258px 258px 258px;
    grid-template-areas: 
    "BarChart BarChart BarChart Nutrient"
    "BarChart BarChart BarChart Nutrient"
    "BarChart BarChart BarChart Nutrient"
    "BarChart BarChart BarChart Nutrient"
    ". . . Nutrient"
    "LineChart RadarChart radialChart Nutrient"
    "LineChart RadarChart radialChart Nutrient"
    "LineChart RadarChart radialChart Nutrient";
    
    .lineChart { grid-area: LineChart }
    .nutrients { grid-area: Nutrient }
    .barChart { grid-area: BarChart }
    .radarChart { grid-area: RadarChart }
    .radialChart { grid-area: radialChart }
`
/**
 * Component for main content, dynamicaly filled with user data
 * @component
 * 
 */
function Dashboard(){
    
    const [userData, setUserData] = useState(null)
    
    useEffect(()=>{
        /**
         * fetch user info from USER_MAIN_DATA and store it into component state
         * @async
         */ 
        const fetchUserDatas = async () => {
            const data = await getUser()
            setUserData(data)
        }
        fetchUserDatas()
    },[])
    
    if(!userData){
        return(
            <div>LOADING DATAS</div>
        )
    }

    return(
        <DashboardContainer>
            <Title>Bonjour <Name>{userData.userInfos.firstName}</Name></Title><br/>
            <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
            <DataContainer>
                <BarChart />
                <LineChart />
                <RadarChart />
                <RadialChart data={[{'score':userData.score}]}/>
                <Nutrients data={userData.keyData}/>
            </DataContainer>
        </DashboardContainer>
    )
}

export default Dashboard