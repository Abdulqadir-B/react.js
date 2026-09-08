import {useState} from 'react'

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Sam Altman",
        age: 30,
        email: "sama@chatgpt.com",
        address: {
            city: "California",
            country: "US"
        }
    })

    const updateName = () => {
        setUser({
            ...user,
            name: "Bill Gates"
        })
    }

    const updateAge = () => {
        setUser({
            ...user, // spread user object to copy other values in it as it is
            age: 31
        })
    }

    const updateAddress = () => {
        setUser({
            ...user,
            address:{
                ...user.address,
                city: "New York"
            }
        })
    }

    return <>
        <h2>{user.name}</h2>
        <p>Age: {user.age} </p>
        <p>Email ID: {user.email} </p>
        <p>Address: {user.address.city}, {user.address.country} </p> <br />
        <button onClick={updateName}>Update Name</button> <br />
        <button onClick={updateAge}>Update Age by +1</button> <br />
        <button onClick={updateAddress}>Update City to New york</button>
    </>
}