import DreamVillagerCards from './DreamVillagerCards'

function DreamVillagerContainer({dreamVillagers}) {

    const dreamArray = dreamVillagers.map((dreamie) => {
        return(
            <DreamVillagerCards 
                key={dreamie.id}
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