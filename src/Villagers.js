import {Card} from '@material-ui/core'
import { useState } from 'react'

function Villagers(props) {
    const [toggleMove, setToggleMove] = useState(false)
    const [toggleDream, setToggleDream] = useState(false)

    const {name, species, birthday, img_url, gender, id} = props

    return(
        <Card className="card">
            <div>
                <img src={img_url} alt=''/>
                <h2>{name}</h2>
                <p>{birthday} <br/> {species} <br/> {gender}</p>
           </div>
           <div>
                    {toggleMove ? (
                        <button>Move Out 🏠</button> 
                        
                        
                    ): (
                        <button>Move In 🏠</button>
                    ) 
                    }
                {toggleDream ? (
                    <button>Remove From Your Dreamies ⛈️</button>
                ): (
                    <button>Add to Your Dreamies 🌤️</button>
                )}
                
        </div>
        </Card>
        
    )
}

export default Villagers