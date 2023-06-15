import { useState } from 'react';
import '../ColorBox/ColorBox.css'

const ColorBox = ({colors}) => {
    const random = Math.floor(Math.random() * colors.length)
    const [num, setNum] = useState(random)

    const colorChanging = () => {
        // if(num !== (colors.length - 1)){
        //     setNum(num + 1)
        // }else{
        //     setNum(0)
        // }
        setNum(random)
    }

    return ( 
        <div onClick={colorChanging} style={{backgroundColor: colors[num]}} className="color-box"></div>
     );
}
 
export default ColorBox;