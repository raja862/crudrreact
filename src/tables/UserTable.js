
const UserTable=(props)=>(
    <div style={{alignItems:"center"}}>
    <table>
        <thead>
            <tr>
                <th><h1>Name</h1></th>
                <th><h1>Username</h1></th>
                <th><h1>Actions</h1></th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
                    <tr key={user.id}>
                    <td><h3>{user.name}</h3></td>
                    <td><h3>{user.username}</h3></td>
                    <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)}className="button muted-button">Delete</button>
    
                    </td>
                </tr>

                ))
            ):(
                <tr>
                    <td>no user</td>
                </tr>
            )
            }
            
                    

           
        </tbody>
    </table>
    </div>
)

export default UserTable;