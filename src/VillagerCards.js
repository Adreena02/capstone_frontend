import Villagers from './Villagers'

function VillagerCards({addUserVillager, filterVillagers, villagerId, playerId, addDreamVillager}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}
                playerId={playerId}
                addDreamVillager={addDreamVillager}
                addUserVillager={addUserVillager}
                {...filterVillager}
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