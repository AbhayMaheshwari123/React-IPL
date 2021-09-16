import React from 'react'
import axios from 'axios'
import { useEffect,useState,useCallback } from 'react'
import Logo from '../Helper/Logo.js';
import { useHistory } from 'react-router-dom'
import useStyles from '../Styling/TeamCardStyle.js';
import Lodr from './loader.js';
function Cards() {
    const [teamData,setteamData]=useState();
    const url='https://ipl-t20.herokuapp.com/teams';
    const history=useHistory();
    const classes=useStyles();

    useEffect(() => {
        async function fetchdata(){
            const response=await axios.get(url);
            setteamData(response.data);
            };
            fetchdata();
    }, [url])
    
    const clickHandler=useCallback((id)=>{    
         history.push(`team/${id}`);   
    },[teamData,history])

    if(!teamData){
        return <Lodr />
    }else{
    return (
            <div className={classes.container}>
                {Object.keys(Logo).map((item,index)=>
                {
                    return (
                    <div className={`${classes.teamcard} ${classes[teamData[index].id]}`} key={index} onClick={()=>clickHandler(teamData[index].id)}>                      
                        <img className={classes.logo} src={Logo[item].default} />
                        <div >
                            <h3 className={classes.teamname}>{teamData[index].teamName}</h3>
                            <h6 className={classes.venue}>{teamData[index].venue}</h6>
                            {teamData[index].winningYears.length?(
                            <div >
                                <h4 className={classes.win}>{teamData[index].winningYears.map((item)=>{
                                    return `${item} `;
                                })}</h4>
                            </div> ):(<></>)}
                        </div>
                        <h5 className={classes.home}>Team Home</h5>
                    </div>                    
                    )
                })}
            </div>
    )
    }
}

export default Cards
