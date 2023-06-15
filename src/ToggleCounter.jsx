import { useState } from "react";
import "./Toggler.css"

const ToggleCounter = () => {
    const [emo, setEmo] = useState(true)
    const [count, setCount] = useState(0)

    const emoticon = emo? "😄": "😒"
    const handleClick =() => {
        setCount(count + 1)
        setEmo(!emo)
    }
    const incrementCount = () => {
    }

    return ( 
        <div className="toggler">
            <p onClick={handleClick}>{emoticon}</p>
            <p>{ count }</p>
        </div>
     );
}
 
export default ToggleCounter;