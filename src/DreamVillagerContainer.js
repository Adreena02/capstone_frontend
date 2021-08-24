import DreamVillagerCards from './DreamVillagerCards'

function DreamVillagerContainer({dreamVillagers, removeDream}) {

    const dreamArray = dreamVillagers.map((dreamie) => {
        return(
            <DreamVillagerCards 
                key={dreamie.id}
                removeDream={removeDream}
                {...dreamie}
            />
        )
    })
    return(
        <div>
          {dreamArray}
        </div>
    )
}

export default DreamVillagerContainer