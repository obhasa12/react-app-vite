import { useState } from "react";
import "./Toggler.css"

const Toggler = () => {
    const [emo, setEmo] = useState(true)

    const emoticon = emo? "😄": "😒"
    const handleClick =() => {
        setEmo(!emo)
    }

    return ( 
        <div className="toggler">
            <p onClick={handleClick}>{emoticon}</p>
        </div>
     );
}
 
export default Toggler;