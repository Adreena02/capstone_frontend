function Search({handleSearch}) {
    return(
        <div>
            <input className="search" onChange={handleSearch} placeholder="Search for a villager"/>
        </div>
    )
}

export default Search