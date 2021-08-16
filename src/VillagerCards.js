import Villagers from './Villagers'

function VillagerCards({villagers}) {

    const villagerArray = villagers.map((villager) => {
        return(
            <Villagers
                key = {villager.id}
                {...villager}
            />
        )
    })

    return(
        <div>
            {villagerArray}
        </div>
    )
}

export default VillagerCards