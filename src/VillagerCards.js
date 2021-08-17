import Villagers from './Villagers'

function VillagerCards({filterVillagers}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}

                {...filterVillager}
            />
        )
    })

    // console.log(villagerArray)

    return(
        <div>
            {villagerArray}
        </div>
    )
}

export default VillagerCards