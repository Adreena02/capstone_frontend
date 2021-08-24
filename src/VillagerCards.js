import Villagers from './Villagers'

function VillagerCards({deleteVillager, addUserVillager, filterVillagers, villagerId, playerId, addDreamVillager}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}
                playerId={playerId}
                deleteVillager={deleteVillager}
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