export const Events = ({text}) => {
    const handleClick = (e) => {
        console.log(e.target, e.type, e.clientX, e.clientY);
    }

    return <button onClick={handleClick} className="primary-button">{text}</button>
}