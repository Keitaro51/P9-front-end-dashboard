import { useEffect, useState } from 'react'
import LineChart from '../Dashboard/Charts/lineChart'
import BarChart from '../Dashboard/Charts/barChart'
import RadarChart from '../Dashboard/Charts/radarChart'
import PieChart from '../Dashboard/Charts/pieChart'
import Icon from './Icon/icon'

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

import { getUser } from '../../services/getAPI'
import { USER_TEST_ID } from '../../config'

function Dashboard(){
    
    const icons = [energy, chicken, apple, cheeseburger]

    const [userData, setUserData] = useState(null)
    
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

    console.log(userData);

    return(
        <main>
            <h1>Bonjour {userData.data.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="data-container">
                <LineChart id={userData.data.id}/>
                <BarChart id={userData.data.id}/>
                <RadarChart id={userData.data.id}/>
                <PieChart />
                <Icon svg={icons}/>
            </div>
        </main>
    )
}

export default Dashboard