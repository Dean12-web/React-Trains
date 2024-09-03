import { useState } from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"

export default function UserBox() {
    // state itu variable 
    // prop itu parameter
    const [data,setData] = useState([
        {email: 'data@email.com'},
        {email: 'baru@email.com'},
    ])

    return (
        <div class="card">
            <h1 class="card-header text-center">List Data</h1>
            <div class="card-body">
                <UserForm/>
            </div>
                <UserList />
        </div>
    )
}