import React, {useState, useEffect} from 'react'
import './Match.css'
import {useSelector, useDispatch} from 'react-redux'

export default function Match() {



    const monEtat = useSelector(state => state.etat);
    const [leagues, setLeague] = useState([]);  
    const dispatch = useDispatch();  

    const increment = () => {
        dispatch({
            type: 'INCR'
        })
    }

useEffect(()=>{
 const findMatchsLive = async () =>{
     const reponse = await fetch("https://app.sportdataapi.com/api/v1/soccer/matches?apikey=bc67fe80-4939-11eb-836f-95bec9b28b56&season_id=471&=live=1")
     const lesdata = await reponse.json();
 console.log(lesdata.data);
 setLeague(lesdata.data)

}
findMatchsLive();
}, []);
     
    return (
        <div id="matchs">
        <button onClick={increment}>+</button>
        {monEtat}
            {leagues.map(league =>{
                return <div className="match"> Début du match:{league.match_start} <br />
               Equipe maison{league.home_team.name} <br />
               Date {league.start_date}<br />
              courant ?{league.is_current} <br /> </div>;
            })}
        </div>
    )
    }
