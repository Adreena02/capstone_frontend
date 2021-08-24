import {Card} from '@material-ui/core'
import './Villager.css'
function DreamVillagerCards(props) {
    const {id, name, species, birthday, gender, img_url, personality_traits, removeDream } = props
    // console.log(props)
    return(
        <Card className="cards" style={{backgroundColor: "#c8e4f4"}}>
        <div>
            <img src={img_url} alt='oops' className="photo" />
            <h2 className="villager-name">{name}</h2>
            <div className="card-info">
                <p>{birthday} <br/>
                {species} <br/>
                {gender} </p>
            </div>
            <button className="remove-dream-btn" onClick={(e) => removeDream(e, id)}>Remove from Dreamies</button>
        </div>
        </Card>
    )
}

export default DreamVillagerCards