import {Card} from '@material-ui/core'
function DreamVillagerCards(props) {
    const {name, species, birthday, gender, img_url, personality_traits } = props
    // console.log(props)
    return(
        <Card className="dream-cards">
        <div>
            <img src={img_url} alt='oops' className="dream-photo" />
            <h2 className="villager-name">{name}</h2>
            <div className="card-info">
                <p>{birthday} <br/>
                {species} <br/>
                {gender} </p>
            </div>
            <button>Remove from Dreamies</button>
        </div>
        </Card>
    )
}

export default DreamVillagerCards