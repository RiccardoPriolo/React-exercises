import { useMemo } from "react"

const list = [
    {name:"Riccardo", id: 1, age: 29,},
    {name:"Emanuele", id: 2, age: 19,},
    {name:"Angelo", id: 3, age: 17,},
    {name:"Oliver", id: 4, age: 7,},
    {name:"Andrea", id: 5, age: 23,},

]

export function FilteredList() {
    const users = useMemo(() => list.map((user) => user.age >= 18 && <li key={user.id}>{user.name} - {user.age}</li>), [] )

    return (
        <>
            <ul>
                {users}
            </ul>
        </>
    )
}