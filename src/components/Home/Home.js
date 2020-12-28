import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div id="home" className="container scale-up-ver-center">
        <div className="text-content">
            <h2> <span className="emphase">React-betting </span>
Pariez pour gagner <span  className=" rotate-scale-up"> 💵</span></h2>
        <p> Les matchs en live, les côtes, les joueurs, tu as tout ce dont tu as besoin ici!</p>
        <button>Parier</button>
        </div>
        
        </div>
    )
}
