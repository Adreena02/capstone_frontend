import { Card } from '@material-ui/core'
function Townies(props) {

    const {name, species, birthday, gender, img_url, personality_traits, removeNeighbor} = props
    // console.log(props);

    return(
        <Card>
            <div>
                <img src={img_url} alt='oops' className="townie-photo" />
                <h2 className="townie-name">{name}</h2>
                <div className="card-info">
                    <p>{birthday} <br/>
                    {species} <br/>
                    {gender}</p>
                </div>
                <button onClick={removeNeighbor}>Move Out!🏠</button>
            </div>
        </Card>
        
    )
}

export default Townies