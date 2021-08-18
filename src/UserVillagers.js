import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({filterVillagers}) {
 

    // function showAllNeighbors(e){
    //     // let id = userNow.id
    //     // console.log(id)
    //     // fetch(`http://localhost:3000/players/${id}/townies`)
    //     .then(res => res.json())
    //     .then(data => console.log)
    
    return(
        <div>
            <Villagers />
            <Townies  />
        </div>
    )
}

export default UserVillagers