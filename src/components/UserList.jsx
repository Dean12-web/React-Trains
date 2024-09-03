import UserItem from "./UserItem"
export default function UserList() {
    return (
        <table class="table mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <UserItem />
            </tbody>
        </table>
    )
}