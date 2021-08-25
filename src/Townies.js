import { Card } from '@material-ui/core'
import './Villager.css' 
function Townies(props) {

    const {id, name, species, birthday, gender, img_url, personality_traits, removeNeighbor, handleDeleteClick} = props
    

    return(
        <Card className="cards" style={{backgroundColor: "#C8E4F4", boxShadow: '8px 4px 7px 1px lightGrey'}}>
            <div>
                <img src={img_url} alt='oops' className="photo" />
                <h2 className="villager-name">{name}</h2>
                <div className="card-info">
                    <p>Birthday: {birthday} <br/>
                    Species: {species} <br/>
                    Gender: {gender}</p>
                </div>
                <button className="move-out-btn" onClick={(e) => handleDeleteClick(e, id)}>Move Out!</button>
            </div>
        </Card>
        
    )
}

export default Townies