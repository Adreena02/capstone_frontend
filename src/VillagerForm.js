import { useState } from 'react'
import { useHistory } from 'react-router'

function VillagerForm({villagers, addVillager}){
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: villagers.name,
        birthday: villagers.birthday,
        gender: villagers.gender,
        species: villagers.species,
        img_url: villagers.img_url
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    console.log(formData)

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/villagers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                birthday: formData.birthday,
                gender: formData.gender,
                species: formData.species,
                img_url: formData.img_url
            })
        })
        .then(res => res.json())
        .then(vil => {
            addVillager(vil)
            history.push('/home')
        })
    }
    
    return(
        <div>
            <h1>Add a Missing Villager!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Insert Villager's Name" value={formData.name} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Birthday:
                    <input type="text" name="birthday" placeholder="Insert Villager's Birthday" value={formData.birthday} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Gender:
                    <input type="text" name="gender" placeholder="Insert Villager's Gender" value={formData.gender} onChange={handleChange} required/>
                </label>
                <br />
                <label>
                    Species:
                    <input type="text" name="species" placeholder="Insert Villager's Species" value={formData.species} onChange={handleChange} required/>
                </label>
                <br />
                <label>
                    Image Link:
                    <input type="url" name="img_url" placeholder="Insert Image URL" value={formData.img_url} onChange={handleChange} required/>
                </label>
                <br />
                <button type="submit">Add a Villager!</button>
            </form>
        </div>
    )
}

export default VillagerForm
// declaring a state for everything seemed too tedious.
// const [name, setName] = useState("")
// const [birthday, setBirthday] = useState("")
// const [gender, setGender] = useState("")
// const [species, setSpecies] = useState("")
// const [imgUrl, setImgUrl] = useState("")

// function handleNameChange(e){
    //     setName(e.target.value) 
    // }
    // function handleBirthdayChange(e){
        //     setBirthday(e.target.value)
        // }
        // function handleGenderChange(e){
            //     setGender(e.target.value)
            // }
            // function handleSpeciesChange(e){
                //     setSpecies(e.target.value)
                // }
                // function handleImgChange(e){
                    //     setImgUrl(e.target.value)
                    // }
{/* <form>
    <input type="text" name="name" value={name} onChange={handleNameChange}/>
    <input type="text" name="birthday" value={birthday} onChange={handleBirthdayChange}/>
    <input type="text" name="gender" value={gender} onChange={handleGenderChange}/>
    <input type="text" name="species" value={species} onChange={handleSpeciesChange}/>
    <input type="text" name="imgUrl" value={imgUrl} onChange={handleImgChange}/>
</form> */}