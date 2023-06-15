import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0)

    const handleClick = () =>{
        setNum(num + 1)
    }

    return ( 
        <div className="counter">
            <p>the count is: {num}</p>
            <button onClick={handleClick}>click</button>
        </div>
     );
}
 
export default Counter;