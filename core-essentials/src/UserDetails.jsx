export const UserDetails = ({name, isOnline, status}) => {

    return (
        <>
            <h2>{name} is {isOnline ? "🟢 Online" : "Offline"} </h2>
            <p>Status : {status}</p>
            
        </>
    )
}

// concept of the conditional rendering 
// 1. by using if else statements
// 2. by using ternary operator
// 3. by using the && operator
// 4. by using variables

