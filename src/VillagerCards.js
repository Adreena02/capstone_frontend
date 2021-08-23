import Villagers from './Villagers'

function VillagerCards({stretchFilter, filterVillagers, handleAddToTown}) {

    const villagerArray = filterVillagers.map((filterVillager) => {
        return(
            <Villagers
                key = {filterVillager.id}
                handleAddToTown={handleAddToTown}
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