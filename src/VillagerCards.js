import Villagers from './Villagers'

function VillagerCards({stretchFilter, addUserVillager, filterVillagers, villagerId, playerId, moveOut, removeNeighbor,addDreamVillager}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}
                moveOut = {moveOut}
                playerId={playerId}
                addDreamVillager={addDreamVillager}
                addUserVillager={addUserVillager}
                removeNeighbor={removeNeighbor}
                {...filterVillager}
            />
        )
    })


    // const stretchVillagerArray = stretchFilter.map((stretch) => {
    //     return (
    //         <Villagers
    //             key={stretchFilter.id}
    //             handleAddToTown={handleAddToTown}
    //             {...stretchFilter}
    //             />
    //     )
    // })

    // console.log(villagerArray)

    return(
        <div>
            {villagerArray}
            {}
        </div>
    )
}

export default VillagerCards