import {Card} from '@material-ui/core'
import { useState } from 'react'

function Villagers(props) {
    const [toggleMove, setToggleMove] = useState(false)
    const [toggleDream, setToggleDream] = useState(false)

    const {name, addUserVillager, playerId, species, birthday, img_url, gender, id, moveOut, removeNeighbor} = props

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
            // console.log(data)
            // setNeighbors(newNeighbor)
            addUserVillager(newNeighbor)
        })
    }

  
    

    return(
        <Card className="cards">
            <div>
                
                <img src={img_url} alt=''className="photo"/>
                <h2 className="villager-name">{name}</h2>
                <div className="card-info">
                    <p>{birthday} 
                    <br/> {species} 
                    <br/> {gender}</p>
                </div>
                
                {toggleMove ? (
                        <button onClick={removeNeighbor}>Move Out 🏠</button> 
                        
                        
                    ): (
                        <button onClick={handleAddToTown}>Move In 🏠</button>
                    ) 
                    }
                {/* {toggleDream ? (
                    <button>Remove From Your Dreamies ⛈️</button>
                ): (
                    <button>Add to Your Dreamies 🌤️</button>
                )} */}
           </div>
           <div>
                
                
        </div>
        </Card>
        
    )
}

export default Villagers