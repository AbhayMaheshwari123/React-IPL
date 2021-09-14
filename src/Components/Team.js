import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

function Team(props) {
    const [teamdetail,setteamdetail]=useState();
    const {url}=props 
    useEffect(() => {
        async function fetchteamdata(){
            const res=await axios.get(url);
                setteamdetail(res.data)
        };
        fetchteamdata();
        
    }, [url])
    if(!teamdetail){
        return <h3>Loading...</h3>
    }else{
    return (
        <div>
            {teamdetail.players.map((detail,index)=>{
                return (
                    <div>
                <img  src={detail.image} alt={detail.name} />
                    <div>
                        <div>
                            <h5>{detail.name}</h5>
                        </div>
                        <h6>IPL 2021</h6>
                        <div>
                            <div >
                                <h5>{detail.stats.matches}</h5>
                                <h5>Matches</h5>
                            </div>
                            <div >
                            <h5 >{detail.stats.runs}</h5>
                                <h5>Runs</h5>
                            </div>
                            <div >
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
