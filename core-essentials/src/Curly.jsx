export const Curly = () => {
    const name = "Raj";
    const age = 25;
    const role = "SDE"
    const availaible = true;

    return(
        <>
            <h3>{name} is {age} years old and works as {role} </h3>
            <p> He is {(availaible) ? "Availaible" : "not Availaible"} for work </p>
            <br />
        </>
    )
};