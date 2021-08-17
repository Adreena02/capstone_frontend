import {Card} from '@material-ui/core'

function Villagers(props) {

    const {name, species, birthday, img_url, gender, id} = props

    return(
        <Card className="card">
            <div>
                <img src={img_url} alt=''/>
                <br/>
                <h3>{name}</h3>
                <h6>{birthday} <br/> {species} <br/> {gender}</h6>
                
           </div>
        </Card>
        
    )
}

export default Villagers