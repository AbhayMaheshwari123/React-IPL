import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Logo from '../Helper/Logo';
import { useHistory } from 'react-router-dom'

function Cards() {
    const [teamData,setteamData]=useState();
    const url='https://ipl-t20.herokuapp.com/teams';
    const history=useHistory();
    useEffect(() => {
        async function fetchdata(){
            const response=await axios.get(url);
            setteamData(response.data);
            };
            fetchdata();
    }, [url])

    if(!teamData){
        return <h3>Loading...</h3>
    }else{
    return (
            <div>
                {Object.keys(Logo).map((item,index)=>
                {
                    return (
                    <div key={index} onClick={()=>{history.push(`team/${teamData[index].id}`)}}>                      
                        <img src={Logo[item].default} />
                        <div >
                            <h3 >{teamData[index].teamName}</h3>
                            <h6 >{teamData[index].venue}</h6>
                            <div >
                                <h4 >{teamData[index].winningYears}</h4>
                            </div> 
                        </div>
                        <h5>Team Home</h5>
                    </div>                    
                    )
                })}
            </div>
    )
    }
}

export default Cards
