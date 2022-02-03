import { useEffect, useState } from 'react'
import { getActivity } from '../../../services/getAPI'

function BarChart({ id }){

    const [userActivity, setUserActivity] = useState(null)

    useEffect(()=>{
        const fetchUserActivity = async () => {
            const data = await getActivity(id)
            setUserActivity(data)
        }
        fetchUserActivity()
    },[id])
    
    
    console.log(userActivity)

    if(!userActivity){
        return(
            <div>LOADING ACTIVITY CHART</div>
        )
    }

    return(
        <>
            <div>BarChart HERE { id } / {userActivity.data.userId} </div>
        </>
    )
}

export default BarChart