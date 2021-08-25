import {Card} from '@material-ui/core'
import { useState } from 'react'
import './Villager.css'
function Villagers(props) {
    // const [toggleMove, setToggleMove] = useState(false)
    // const [toggleDream, setToggleDream] = useState(false)

    const {name, addUserVillager, playerId, species, birthday, img_url, gender, id, addDreamVillager, deleteVillager} = props

    function handleAddToTown(e){

        let neighborObj = {
            villager_id: id,
            player_id: playerId
        }
    
        fetch(`http://localhost:3000/user_villagers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(neighborObj)
            })
        .then(res => res.json())
        .then(newNeighbor => { 
            addUserVillager(newNeighbor)
        })
    }

    function handleAddToDreamList(e){
        let dreamObj = {
            villager_id: id,
            player_id: playerId
        }

        fetch(`http://localhost:3000/dream_villagers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dreamObj)
        })
        .then(res => res.json())
        .then(newDream => {
            addDreamVillager(newDream)
        })
    }
  
    

    return(
        <Card style={{backgroundColor: "#C8E4F4", boxShadow: '8px 4px 7px 1px lightGrey'} } className="cards">
            <div>
                
                <img src={img_url} alt=''className="photo"/>
                <h2 className="villager-name">{name}</h2>
                <div className="card-info">
                    <p>{birthday} 
                    <br/> {species} 
                    <br/> {gender}</p>
                </div>
                <div>
                <button className="delete-villager-btn" onClick={(e) => deleteVillager(e, id)}>Delete Villager</button>
                <button className="move-in-btn" onClick={handleAddToTown}>Move In</button>
                <button className="add-to-dream-btn" onClick={handleAddToDreamList}>Add to Dreamies </button>
                </div>
                   
           </div>
           <div>
                
                
        </div>
        </Card>
        
    )
}

export default Villagers