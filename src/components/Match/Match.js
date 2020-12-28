import React, {useState, useEffect} from 'react'

export default function Match() {

const [leagues, setLeague] = useState([]);    

useEffect(()=>{
 const findData = async () =>{
     const reponse = await fetch("https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=bc67fe80-4939-11eb-836f-95bec9b28b56&league_id=301", {
        
    })
     const lesdata = await reponse.json();
 console.log(lesdata.data);
 setLeague(lesdata.data)

}
findData();
}, []);
     
    return (
        <div id="matchs">
        
            {leagues.map(league =>{
                return <div> Id:{league.season_id} <br />
                Nom de la league{league.name} <br />
               Date {league.start_date}<br />
              courant ?{league.is_current}</div>;
            })}
        </div>
    )
    }
