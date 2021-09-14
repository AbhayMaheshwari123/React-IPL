import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import useStyles from '../Styling/TeamStyle'
import Lodr from '../loader'
function Team(props) {
    const [teamdetail,setteamdetail]=useState();
    const {url}=props;
    const classes=useStyles();
    useEffect(() => {
        async function fetchteamdata(){
            const res=await axios.get(url);
                setteamdetail(res.data)
        };
        fetchteamdata();
        
    }, [url])
    if(!teamdetail){
        return <Lodr />
    }else{
    return (
        <div className={classes.container}>
            {teamdetail.players.map((detail,index)=>{
                return (
                    <div>
                <img className={classes.pic} src={detail.image} alt={detail.name} />
                    <div>
                        <div>
                            <h5 className={classes.playername}>{detail.name}</h5>
                        </div>
                        <h6 className={classes.iplyear}>IPL 2021</h6>
                        <div>
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
                    </div></div>)
            })}
        </div>
    )}
}

export default Team
