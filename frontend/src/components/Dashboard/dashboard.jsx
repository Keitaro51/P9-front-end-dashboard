import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getUser } from '../../services/getData'
import { USER_TEST_ID } from '../../config'

import LineChart from '../Dashboard/Charts/lineChart'
import BarChart from '../Dashboard/Charts/barChart'
import RadarChart from '../Dashboard/Charts/radarChart'
import PieChart from '../Dashboard/Charts/pieChart'
import Nutrients from './Nutrients/nutrients'

const DashboardContainer =  styled.main`
    flex-grow: 1;
    margin: 68px 90px 44px 109px;
`

const Title =  styled.p`
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 41px;
`

const Name =  styled.span`
    color: red;
`

const Text = styled.p`
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 101px;
`

const DataContainer = styled.div`
    height: 613px;
    display: grid;
    
    grid-auto-columns: 1fr; 
    grid-template-columns: 263px 263px 263px 124px; 
    grid-template-rows: 1fr 0.39fr 1fr 0.39fr 0.1fr 0.9fr 0.39fr 1fr; 
    gap: 0px 30px; 
    grid-template-areas: 
    "BarChart BarChart BarChart Icon"
    "BarChart BarChart BarChart Icon"
    "BarChart BarChart BarChart Icon"
    "BarChart BarChart BarChart Icon"
    ". . . Icon"
    "LineChart RadarChart PieChart Icon"
    "LineChart RadarChart PieChart Icon"
    "LineChart RadarChart PieChart Icon";
    
    .lineChart { grid-area: LineChart;background-color:#FBFBFB; border-radius: 5px; }
    .icon { grid-area: Icon;background-color:yellow }
    .barChart { grid-area: BarChart;background-color:#FBFBFB; border-radius: 5px; }
    .radarChart { grid-area: RadarChart;background-color:#FBFBFB; border-radius: 5px; }
    .pieChart { grid-area: PieChart;background-color:#FBFBFB; border-radius: 5px; }
`

function Dashboard(){
    
    

    const [userData, setUserData] = useState(null)
    //TODO function dans useEffect?
    useEffect(()=>{
        fetchUserDatas(USER_TEST_ID)
    },[])
    
    const fetchUserDatas = async (id) => {
        const data = await getUser(id)
        setUserData(data)
    }
        
    if(!userData){
        return(
            <div>LOADING DATAS</div>
        )
    }

    //console.log(userData);

    return(
        <DashboardContainer>
            <Title>Bonjour <Name>{userData.userInfos.firstName}</Name></Title>
            <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
            <DataContainer>
                <BarChart id={userData.id}/>
                <LineChart id={userData.id}/>
                <RadarChart id={userData.id}/>
                <PieChart />
                <Nutrients data={userData.keyData}/>
            </DataContainer>
        </DashboardContainer>
    )
}

export default Dashboard