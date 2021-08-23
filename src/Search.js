function Search({handleSearch, handleStretchSearch}) {
    return(
        <div className="search-area">
            <input className="search" onChange={handleSearch} placeholder="Search for a villager"/>
        </div>
    )
}

export default Search