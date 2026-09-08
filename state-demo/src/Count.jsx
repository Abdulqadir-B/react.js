import {useState} from 'react'

export const Count = () => {
    const[count, setCount] = useState(0);

    console.log("current count is :", count);

    const handleCount = () => {
        setCount(count + 1);
    }

    return <button onClick={handleCount}>Count : {count}</button>
}