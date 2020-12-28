import React from 'react'
import {Link} from 'react-router-dom'
export default function NavItems(props) {
    return (
        <li>
        <Link to={props.route} className="nav-items">
       {props.name} 
        </Link> </li>
    )
}
