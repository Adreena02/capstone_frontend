function addNewVillager(e){
    e.preventDefault()
    let villagerObj = {
        name: villagers.name,
        birthday: villagers.birthday,
        species: villagers.species,
        gender: villagers.gender,
        img: villagers.img_url
    }
    fetch('http://localhost:3000/villagers', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(villagerObj)
    })
}

<div>
    <h1>Add a Missing Villager</h1>
    <form onSubmit={addNewVillager}>
        <label>
            Name:
            <input type="text" name="name" value="" onChange={}/>
        </label>
        <br />
        <label>
            Birthday:
            <input type="text" name="birthday" value="" onChange={}/>
        </label>
        <br />
        <label>
            Species:
            <input type="text" name="" value="" onChange={}/>
        </label>
        <br />
        <label>
            Gender:
            <input type="text" name="" value="" onChange={}/>
        </label>
        <br />
        <label>
            Image:
            <input type="text" name="" value="" onChange={}/>
        </label>
    </form>
</div>