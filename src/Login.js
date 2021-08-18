
function Login({setPlayers, users, currentUser, userNow}) {

    return(
        <div>
            <select className="login" onChange={currentUser} value={userNow}>
                <option>Select Player!</option>
                {users}
            </select>
           
        </div>
    )
}

export default Login