import Villagers from './Villagers'

function VillagerCards({filterVillagers, handleAddToTown}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}
                handleAddToTown={handleAddToTown}
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