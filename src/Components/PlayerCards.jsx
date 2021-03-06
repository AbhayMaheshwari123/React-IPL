import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import useStyles from '../Styling/PlayerCardsStyle.js'
import Bannercomp from './Banner.jsx'
import URL from '../Helper/Url.js'

function Team(props) {
    const url=URL[props.match.url.slice(6)]
    const [teamdetail,setteamdetail]=useState();
    const teamname=props.match.url.slice(6)
    const classes=useStyles();
    useEffect(() => {
        async function fetchteamdata(){
            if(url){
                await axios.get(url).then((res)=>{
                    setteamdetail(res.data)
                }).catch(()=>{
                    setteamdetail("error")
                })
                
            }else{
                console.log("Invalid Path")
                setteamdetail('Invalid Path')

            }
            
                
        };
        fetchteamdata();
    }, [url])
    
    return (
        <>{teamdetail&& <>
                <Bannercomp teamName={teamname} />

            <div className={classes.container}>
                {teamdetail.players.map((detail)=>{
                    return (
                    <div className={classes.playercard}> 
                        <div className={`${classes.bg} ${classes[teamname]}`}>
                            <img className={classes.pic} src={detail.image} alt={detail.name} />
                        </div>
                        <div className={classes.detail}>
                            <div>
                                <h5 className={classes.playername}>{detail.name}</h5>
                            </div>
                            <h6 className={classes.iplyear}>IPL 2021</h6>
                            <div className={classes.stats}>
                                <div className={classes.match}>
                                    <h5>{detail.stats.matches}</h5>
                                    <h5>Matches</h5>
                                </div>
                                <div className={classes.run}>
                                <h5 >{detail.stats.runs}</h5>
                                    <h5>Runs</h5>
                                </div>
                                <div className={classes.wicket} >
                                    <h5 >{detail.stats.wickets}</h5>
                                    <h5>Wickets</h5>
                                </div>
                            </div>
                            <div><h4>View Profile</h4></div>
                        </div>
                    </div>)
                })}
            </div></>
        }</>
    )
}


export default Team
